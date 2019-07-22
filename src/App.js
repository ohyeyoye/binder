import React from "react";
import { DateDisplay, TodoList } from "./components";
import { GlobalStyle } from "./global";
import styled from "styled-components";

const App = ({ className }) => {
  return (
    <div className={className}>
      <Main>
        <DateDisplay />
        <TodoList />
      </Main>
      <GlobalStyle />
    </div>
  );
};
const Main = styled.main`
  width: 100%;
`;

export default styled(App)`
  background-color: #194a2f;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 50em;
  position: relative;
  .date-display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
`;
