import React from "react";
import { Link } from "react-router-dom";

import "../assets/signup.css";

const Signup = () => {
  // const lobbies = fetch()
  const lobbies = {
    "1" : "Joao Lobby",
    "2" : "Antoine Lobby",
    "3" : "Nicolas Lobby"
  }

  return (
    <>
      <div className="signup-container">
        <form action="submit" method="post">
          <label for="Username">Username</label>
          <input type="text" />
          <label for="Password">Password</label>
          <input type="password" />
          <button> Login</button>
          <Link to="/signup">Not regick on this link !</Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
