import * as React from "react";
import NavigaionBar from "./components/NavigaionBar";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routePages } from "./routes/index";

const App: React.FC = () => {
  return (
    <AppStyle>
      <BrowserRouter>
        <Routes>
          {routePages.map((route, i) => (
            <Route
              key={`routes__${i}`}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
        <NavigaionBar />
      </BrowserRouter>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export default App;
