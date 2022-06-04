import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/router";
import { AuthContext } from "../Context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
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
          key={route.path}
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
