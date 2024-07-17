import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js'
import dotenv from 'dotenv';
dotenv.config();

export const applyPassportStrategy = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = process.env.JWT_SECRET;
  passport.use(
    new Strategy(options, async (payload, done) => {
      const user = await User.findOne({ email: payload.userInfo.email });
      if (user) {
        return done(null, {
          _id: user._id,
          email: user.email,
        });
      }
      return done(null, false);
    })
  );
};