import React from "react";
import { FlexContainer } from "./FlexWrapper.styles";

interface IFlexWrapperProps {
  children: React.ReactNode;
  direction: string;
  justify: string;
}

/**
 * @todo Add all the props for flexbox so can add further customisation to fit other use cases.
 */
const FlexWrapper: React.FC<IFlexWrapperProps> = ({
  children,
  direction,
  justify,
}) => {
  return (
    <FlexContainer direction={direction} justify={justify}>
      {children}
    </FlexContainer>
  );
};

export default FlexWrapper;
