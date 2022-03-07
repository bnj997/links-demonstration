import styled from "styled-components";

export const LinkContainer = styled.div`
  background-color: ${(props) => props.theme.colors.links.backgroundColor};
  color: ${(props) => props.theme.colors.links.color};
  cursor: pointer;
  text-align: center;
  border: 0px;
  min-width: 85vw;
  border-radius: 5px;
  transition: 0.3s ease-out;
  padding: 1em;

  &:hover {
    background-color: ${(props) => props.theme.colors.links.color};
    color: ${(props) => props.theme.colors.links.backgroundColor};
  }
`;
