import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import Navbar from "./components/Navbar";
import API from "./api/api";  

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </>
  );
}
