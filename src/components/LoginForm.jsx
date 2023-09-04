import React, { useState } from "react";
import axios from "axios";

const projectID = "26761996-ac3c-4318-add3-75e8a193c1d7";

export const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const AuthObject = {
      "Project-ID": projectID,
      UserName: username,
      UserSecret: password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: AuthObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="from">
        <h1 className="title"> Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="UserName..."
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password..."
            required
          />
          <div style={{ alignItems: "center" }}>
            <button className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};
