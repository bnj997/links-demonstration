import React from "react";
import Title from "../../../text/Title/Title";
import { LinkContainer } from "./LinkWrapper.styles";

interface ILinkWrapperProps {
  title: string;
  onClick: () => void;
}

/**
 * @todo Might be overkill making a seperate component and styles for this wrapper, but may improve scalability of the wrapper in future.
 */
const LinkWrapper: React.FC<ILinkWrapperProps> = ({ title, onClick }) => {
  return (
    <LinkContainer onClick={onClick}>
      <Title text={title} />
    </LinkContainer>
  );
};

export default LinkWrapper;
