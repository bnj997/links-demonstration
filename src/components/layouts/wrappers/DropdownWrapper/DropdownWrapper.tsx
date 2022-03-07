import React from "react";
import { DropdownMenu } from "./DropdownWrapper.styles";

interface IFlexWrapperProps {
  children: React.ReactNode;
}

const DropdownWrapper: React.FC<IFlexWrapperProps> = ({ children }) => {
  return <DropdownMenu>{children}</DropdownMenu>;
};

export default DropdownWrapper;
