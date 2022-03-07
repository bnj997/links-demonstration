import styled from "styled-components";

export const TitleWrapper = styled.h3`
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  font-size: ${(props) => props.theme.font.sizes.titleSize};
  font-family: ${(props) => props.theme.font.family.primary};
  font-weight: 600;
`;
