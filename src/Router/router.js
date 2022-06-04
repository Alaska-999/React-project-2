import About from "../Pages/About";
import PostIdPage from "../Pages/PostIdPage";
import Posts from "../Pages/Posts";
import Login from "../Pages/Login";
import Error from "../Pages/Error";

export const privateRoutes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/404", component: <Error />, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: <Login />, exact: false },
  { path: "*", component: <Login />, exact: false },
  { path: "/404", component: <Error />, exact: true },
];
