import React from "react";
import { SubtitleWrapper } from "./Subtitle.styles";

interface ISubtitleProps {
  text: string;
}

const Subtitle: React.FC<ISubtitleProps> = ({ text }) => {
  return <SubtitleWrapper>{text}</SubtitleWrapper>;
};
export default Subtitle;
