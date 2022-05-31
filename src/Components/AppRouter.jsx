import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import Error from "../Pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
