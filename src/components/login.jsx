import React from "react";
import { Link } from "react-router-dom";

import "../assets/signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <form action="submit" method="post">
          <label for="Username">Username</label>
          <input type="text" />
          <label for="Password">Password</label>
          <input type="password" />
          <button> Login</button>
          <Link to="/signup">Not registered yet ? Click on this link !</Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
