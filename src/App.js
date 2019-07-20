import React from "react";
import { DateDisplay } from "./components";
import { GlobalStyle } from "./global";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Main>
        <DateDisplay />
      </Main>
      <GlobalStyle />
    </div>
  );
}

const Main = styled.main`
  height: 100%;
  background: #194a2f;
`;

export default App;
