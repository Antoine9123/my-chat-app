import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../assets/dashboard.css";
import "./lobby";
import getData from "../utils/getData";
import Lobby from "./lobby";

const Lobbies = () => {
  const { id } = useParams();
  const [lobbies, setLobbies] = useState(null);
  const [selectedLobby, setSelectedLobby] = useState(null);


  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getData(
          `https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/lobby/${id}/get-lobby`
        );
        setLobbies(data);
      } catch (error) {
        console.error("Error fetching lobby messages:", error.message);
      }
    };

    fetchMessages();
  }, [id]);

  const handleLobby = (index) => {
    const lobby = lobbies[index];
    setSelectedLobby(lobby);
  };

  return (
    <>
      <div className="main">
        <div className="panel-container">
          <h2>My Lobbies</h2>
          {lobbies &&
            lobbies.map((lobby, index) => (
              <div key={index} className="lobby" onClick={() => handleLobby(index)}>
                <h3 style={{ cursor: "pointer" }} onClick={() => handleLobby(index)}>
                  {lobby.name}
                </h3>
              </div>
            ))}
        </div>
        <div className="main-container">{selectedLobby && <Lobby lobby={selectedLobby} />}</div>
      </div>
    </>
  );
};

export default Lobbies;
