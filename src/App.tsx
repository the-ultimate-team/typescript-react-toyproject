import React from "react";
import StatusBar from "./components/StatusBar";
import NavigaionBar from "./components/NavigaionBar";
import "normalize.css/normalize.css";
import Home from "./Home";
import RecommendPage from "./components/RecommendPage";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <StatusBar />
      {/* <Home /> */}
      <RecommendPage />
      <NavigaionBar />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
`;

export default App;
