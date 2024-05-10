import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

import "../assets/signup.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Axios.post("https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/auth/login", {
        username: username,
        password: password,
      }).then((response) => {
        localStorage.setItem('token', response.data.token)
        console.log("probs here in the navigated ------------------------")
        navigate(`/dashboard/${response.data.user.id}`);
      });
    } catch (error) {
      console.log("probs here in the catch ------------------------")
      console.error("Signup failed:", error.message);
    }
  };
  return (
    <>
      <div className="signup-container">
        <h1>Login to My Chat App</h1>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button> Login</button>
            <Link to="/signup">Not registered yet ? Click on this link !</Link>
          </form>
      </div>
    </>
  );
};

export default Login;
