import React from "react";
// import StatusBar from "./components/StatusBar";
import NavigaionBar from "./components/NavigaionBar";
import Home from "./Home";
import RecommendPage from "./components/RecommendPage";
import styled from "styled-components";
import Detail from "./components/Detail";
import Dibs from "./components/Dibs";

function App() {
  return (
    <AppStyle>
      {/* <StatusBar /> */}
      {/* <Home /> */}
      {/* <RecommendPage /> */}
      {/* <Detail /> */}
      <Dibs />
      <NavigaionBar />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
