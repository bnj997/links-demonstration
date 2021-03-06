import React, { useState } from "react";
import { IMusicLinkItemType } from "../../../types";
import LinkWrapper from "../../layouts/wrappers/LinkWrapper/LinkWrapper";
import { DropdownMenu } from "../../layouts/wrappers/DropdownWrapper/DropdownWrapper.styles";
import MusicItemLink from "./MusicLinkItem";
import AudioPlayer from "./AudioPlayer";

interface IMusicLinkProps {
  platforms: IMusicLinkItemType[];
  onClick: () => void;
  isOpen: boolean;
}

const MusicLink: React.FC<IMusicLinkProps> = ({
  platforms,
  onClick,
  isOpen,
}) => {
  const [currentPlayer, setCurrentPlayer] = useState("");

  const handleClickLink = (platform: string) => {
    setCurrentPlayer(platform);
  };

  const handleOnClick = () => {
    setCurrentPlayer("");
    onClick();
  };

  return (
    <div>
      <LinkWrapper title={"Music"} onClick={handleOnClick} />
      {isOpen && (
        <DropdownMenu>
          {currentPlayer !== "" && <AudioPlayer platform={currentPlayer} />}
          {platforms.map((platform, i) => {
            return (
              <MusicItemLink
                key={i}
                platform={platform}
                onClickLink={(platform) => handleClickLink(platform)}
              />
            );
          })}
        </DropdownMenu>
      )}
    </div>
  );
};

export default MusicLink;
