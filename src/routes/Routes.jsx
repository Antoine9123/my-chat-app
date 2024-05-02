import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../components/login.jsx";
import Signup from "../components/signup.jsx";
import Lobbies from "../components/lobbies.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/lobbies/:id" element={<Lobbies />} />
        </Route>

        <Route exact path="/" element={<p>Hello world</p>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
