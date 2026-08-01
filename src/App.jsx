import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import MainPageGuest from "./pages/MainPageGuest";
import MainPageUser from "./pages/MainPageUser";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageGuest/>} /> 
      <Route path="/mainpageuser" element={<MainPageUser/>} />
      <Route path="/profilepage" element={<ProfilePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
    </Routes>
  );
}