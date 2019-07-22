import styled from "styled-components";

export const circle = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: 50%;
  font-size: ${({ width }) => width * 0.3}px;
  font-weight: 700;
  color: ${({ color }) => color};
  box-shadow: 0 0 5px darkgray;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px darkgray;
  }
`;
