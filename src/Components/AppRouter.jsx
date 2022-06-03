import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import Error from "../Pages/Error";
import PostIdPage from "../Pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
