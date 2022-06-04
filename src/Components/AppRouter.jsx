import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../Router/router";
import { AuthContext } from "../Context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
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
