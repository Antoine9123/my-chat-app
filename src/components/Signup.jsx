import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../assets/signup.css";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      setUsername('');
      setPassword('');

      navigate('/login');

    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <>
      <div className="signup-container">
        <h1>Sign up to My Chat App</h1>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Create account</button>
          </form>
      </div>
    </>
  );
};

export default Signup;
