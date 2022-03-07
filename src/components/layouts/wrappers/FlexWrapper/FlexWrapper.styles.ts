import styled from "styled-components";

interface IFlexContainerProps {
  direction: string;
  justify: string;
}

export const FlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: center;
  gap: 1em;
`;
