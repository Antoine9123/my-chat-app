import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData from "../utils/getData";
import postData from "../utils/postData";

const Lobby = ({ lobby }) => {
    const { id } = useParams();
    const [lobbyMessages, setLobbyMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
  
    useEffect(() => {
      fetchMessages();
    }, [id, lobby]);
  
    const fetchMessages = async () => {
      try {
        const data = await getData(
          `https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/lobby/${id}/get-message`
        );
        setLobbyMessages(data);
      } catch (error) {
        console.error("Error fetching lobby messages:", error.message);
      }
    };
  
    const postMessage = async (message) => {
      try {
        await postData(
          `https://my-chat-app-backend-b8dee6b8f866.herokuapp.com/lobby/${id}/add-message`,
          { content: message }
        );
        fetchMessages();
      } catch (error) {
        console.error("Error posting message:", error.message);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      postMessage(messageInput);
      setMessageInput("");
    };
  
    return (
      <>
        <h1>{lobby.name}</h1>
        <div className="display-lobby-container">
          <hr />
          {lobbyMessages.length > 0 &&
            lobbyMessages.map((message, index) => (
              <div key={index} className="message">
                <p>{message.username}: {message.content}</p>
              </div>
            ))}
        </div>
        <hr />
        <div className="chat-box-container">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Your message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </>
    );
};

export default Lobby;
