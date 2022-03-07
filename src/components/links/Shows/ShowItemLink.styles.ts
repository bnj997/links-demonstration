import styled from "styled-components";

export const ShowLinkContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  padding: 1em;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.dropdown.lineColor};
`;
