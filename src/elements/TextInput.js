import styled from "styled-components";

export const round = styled.input`
  flex: 1;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0 0.8em;
  font-weight: 200;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;
