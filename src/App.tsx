import React from "react";
import StatusBar from "./components/StatusBar";
import NavigaionBar from "./components/NavigaionBar";
import "normalize.css/normalize.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <StatusBar />
      <Home />
      <NavigaionBar />
    </div>
  );
}

export default App;
