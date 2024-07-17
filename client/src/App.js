import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./views/portal/Users";
import Home from "./views/website/Home";
import Login from "./views/website/Login";
import Posts from "./views/website/Posts";
import Register from "./views/website/Register";
import NewPost from "./views/website/NewPost";
import UserProfile from "./views/website/UserProfile";
import Admin from "./views/website/Admin";
import Conclusion from "./views/website/Conclusion";
import CandidatePosts from "./views/website/CandidatePosts";
import AnimalCharacteristics from "./views/website/AnimalCharacteristics";

function App() {

  return (
    /* Configuring routes */
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="newPost" element={<NewPost />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="admin" element={<Admin />} />
          <Route path="conclusion" element={<Conclusion />} />
          <Route path="candidatePosts" element={<CandidatePosts />} />
          <Route path="animalCharacteristics" element={<AnimalCharacteristics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
