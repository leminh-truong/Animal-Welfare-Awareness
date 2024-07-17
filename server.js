import express from 'express';
import helmet from "helmet";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from "passport";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

import users from './routes/users.js';
import posts from './routes/posts.js';
import { applyPassportStrategy } from './middleware/passport.js';

const PORT = process.env.PORT || 5000;

let app;

const connectToDatabase = async () => {
    const dbUrl = process.env.MONGO_SERVER
    try {
        await mongoose.connect(dbUrl, {
            /* useNewUrlParser: true, */
            useUnifiedTopology: true
        })
    } catch (e) {
        throw e.message
    }
}

const createApplication = async () => {
    app = express();


    // Serve static files from the React app
    app.use(express.static(path.join(__dirname + 'client/build')));

    // pre middlewares
    app.use(express.json());
    app.use(helmet());
    app.use(cors({
        credentials: true,
        origin: ['http://localhost:5001']
        /* origin: [ 'https://www.google.com/'] */
    }));
    applyPassportStrategy(passport);
    app.use('/api/users', users);
    app.use('/api/posts', posts);

    // The "catchall" handler: for any request that doesn't
    // match one above, send back React's index.html file.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

const startApplication = async () => {

    app.listen(PORT, () => {
        console.log(`🚀  Application started, listening on port ${PORT}`)
    })

}

(async () => {
    try {
        await connectToDatabase();
        await createApplication();
        await startApplication();

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
})();

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(0);
  });
