import React from "react";

import "../assets/signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <form action="submit" method="post">
          <label for="Username">New Username</label>
          <input type="text" />
          <label for="Password">Password</label>
          <input type="password" />
          <button> Create</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
