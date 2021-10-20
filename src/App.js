import React, { useState } from "react";
import { Header, Button, Icon } from "semantic-ui-react";
import { Redirect } from "react-router";
import "./App.css";

function App() {
  const [isGoToLogin, setisGoToLogin] = useState(false);

  // eslint-disable-next-line
  const handleClick = () => {
    setisGoToLogin(true);
  };

  if (isGoToLogin) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className="App">
      <Header
        as="h1"
        content="Welcome to Email Services"
        inverted
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em",
        }}
      />
      <Header
        as="h2"
        content="Click below to get started!"
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em",
        }}
      />
      <Button onClick={handleClick} primary size="huge">
        Login / Register
        <Icon name="right arrow" />
      </Button>
    </div>
  );
}

export default App;
