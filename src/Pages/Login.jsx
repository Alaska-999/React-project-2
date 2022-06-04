import React, { useContext } from "react";
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import { AuthContext } from "../Context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submit = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Page for login</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="Enter login" />
        <MyInput type="password" placeholder="Enter password" />
        <MyButton>Log In</MyButton>
      </form>
    </div>
  );
};

export default Login;
