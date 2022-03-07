import React from "react";
import { IClassicLinkType } from "../../../types";
import LinkWrapper from "../../layouts/wrappers/LinkWrapper/LinkWrapper";

interface IClassicLinkProps {
  data: IClassicLinkType;
}

const ClassicLink: React.FC<IClassicLinkProps> = ({ data }) => {
  const { url, title } = data;

  const handlePress = () => {
    window.open(url);
  };

  return <LinkWrapper title={title} onClick={handlePress} />;
};

export default ClassicLink;
