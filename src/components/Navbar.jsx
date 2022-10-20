import React from "react";
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  <div id="navbar">
    <h2 id="logo">Stranger's Things</h2>
      <div id="rightSide">
      <Link id="linkstyle" to="/">
        <h2 className="rightside">Home</h2>
        </Link>
        <Link to="/posts">
        <h2 className="rightside">Posts</h2>
        </Link>
        <Link to="/login">
        <h2 className="rightside">Login</h2>
        </Link>
        <Link to ="/messages">
        <h2 className="rightside">Messages</h2>
        </Link>

      </div>
  </div>
      <Outlet /></div>
  );
};

export default Navbar;
