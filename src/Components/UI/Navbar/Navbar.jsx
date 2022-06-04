import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../Context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Log Out</MyButton>
      <div className="navbar__links">
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/posts" className="navbar__link">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
