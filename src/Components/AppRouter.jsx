import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import Error from "../Pages/Error";
import PostIdPage from "../Pages/PostIdPage";
import Login from "../Pages/Login";
import { privateRoutes, publicRoutes } from "../Router/router";

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
{
  /*<Route exact path="/login" element={<Login />} />*/
}
{
  /*<Route path="/" element={<Posts />} />*/
}
{
  /*<Route path="/about" element={<About />} />*/
}
{
  /*<Route exact path="/posts" element={<Posts />} />*/
}
{
  /*<Route exact path="/posts/:id" element={<PostIdPage />} />*/
}
{
  /*<Route path="/404" element={<Error />} />*/
}
{
  /*<Route path="*" element={<Error />} />*/
}
