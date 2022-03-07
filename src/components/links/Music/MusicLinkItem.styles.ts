import styled from "styled-components";

export const MusicLinkContainer = styled.div`
  cursor: pointer;
  flex-grow: 1;
  padding: 1em;

  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.dropdown.lineColor};
`;

export const PlatformContainer = styled.div`
  padding-left: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
