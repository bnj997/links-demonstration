import React from "react";
import { TitleWrapper } from "./Title.styles";

interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};
export default Title;
