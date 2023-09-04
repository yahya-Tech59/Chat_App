import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { ChatFeed } from "./components/ChatFeed";
import { LoginForm } from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="26761996-ac3c-4318-add3-75e8a193c1d7"
        userName="john"
        userSecret="john12"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
};

export default App;
