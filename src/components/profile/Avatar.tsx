import React from "react";
import FlexWrapper from "../layouts/wrappers/FlexWrapper/FlexWrapper";
import Title from "../text/Title/Title";
import { AvatarContainer } from "./Avatar.styles";

interface AvatarProps {
  name: string;
  avatar: string;
}

/**
 * @todo Make an image component that takes in the src and alt text to enable re use.
 */
const Avatar: React.FC<AvatarProps> = ({ name, avatar }) => {
  return (
    <AvatarContainer>
      <FlexWrapper direction="column" justify="center">
        <img src={require("../../assets/profile-picture.png")} alt="profile" />
        <Title text={name} />
      </FlexWrapper>
    </AvatarContainer>
  );
};
export default Avatar;
