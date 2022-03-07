import React, { useState } from "react";
import { IMusicLinkType } from "../../../types";
import LinkWrapper from "../../layouts/wrappers/LinkWrapper/LinkWrapper";
import { DropdownMenu } from "../../layouts/wrappers/DropdownWrapper/DropdownWrapper.styles";
import MusicItemLink from "./MusicItemLink";
import AudioPlayer from "./AudioPlayer";

interface IMusicLinkProps {
  items: IMusicLinkType[];
  onClick: () => void;
  isOpen: boolean;
}

const MusicLink: React.FC<IMusicLinkProps> = ({ items, onClick, isOpen }) => {
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
          {items.map((platform, i) => {
            return (
              <MusicItemLink
                key={i}
                data={platform}
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
