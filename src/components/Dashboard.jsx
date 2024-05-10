import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../assets/dashboard.css";
import "./Lobby";
import getData from "../utils/getData";
import postData from "../utils/postData";
import Lobby from "./Lobby";

const Dashboard = () => {
  const { id } = useParams();
  const [lobbies, setLobbies] = useState(null);
  const [selectedLobby, setSelectedLobby] = useState(null);
  const [lobbyNameInput, setLobbyNameInput] = useState("");

  useEffect(() => {
    fetchLobbies();
  }, [id]);

  const fetchLobbies = async () => {
    try {
      const data = await getData(`https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/lobby/${id}/get-lobby`);
      setLobbies(data);
    } catch (error) {
      console.error("Error fetching lobby messages:", error.message);
    }
  };

  const createLobby = async (lobbyName) => {
    try {
      
      await postData(`https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/lobby/${id}/create-lobby`, {
        name: lobbyName,
      });
    } catch (error) {
      console.error("Error posting message:", error.message);
    }
  };


  const handleLobby = (index) => {
    const lobby = lobbies[index];
    setSelectedLobby(lobby);
  };

  const handleCreateLobby = (event) => {
    event.preventDefault();
    createLobby(lobbyNameInput);
    setLobbyNameInput("");
    fetchLobbies()
  };

  return (
    <>
      <div className="main">
        <div className="panel-container">
          <p>USER ID : {id}</p>
          <h2>My Lobbies</h2>
          {lobbies &&
            lobbies.map((lobby, index) => (
              <div key={index} className="lobby" onClick={() => handleLobby(index)}>
                <h3 className="lobbies_list" style={{ cursor: "pointer" }} onClick={() => handleLobby(index)}>
                  {lobby.name}
                </h3>
              </div>
            ))}
          <hr />
          <form onSubmit={handleCreateLobby} style={{ display:"flex", flexDirection: "column",gap: "10px", width: "80%", padding: "2px" }} >
            <textarea
              placeholder="Lobby's name"
              type="textarea"
              value={lobbyNameInput}
              onChange={(e) => setLobbyNameInput(e.target.value)}
              style={{ width: "80%", padding: "2px" }} 
            />
            <button type="submit" style={{ fontSize: "14px" }}>
              Create lobby
            </button>
          </form>
        </div>
        <div className="main-container">{selectedLobby && <Lobby lobby={selectedLobby} />}
            <h2>My Lobbies</h2>
            <h3></h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
