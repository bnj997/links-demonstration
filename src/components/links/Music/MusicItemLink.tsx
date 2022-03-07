import React from "react";
import FlexWrapper from "../../layouts/wrappers/FlexWrapper/FlexWrapper";
import { ReactComponent as SpotifyIcon } from "../../../assets/icons/spotify.svg";
import { ReactComponent as AppleMusicIcon } from "../../../assets/icons/apple-music.svg";
import { ReactComponent as SoundcloudIcon } from "../../../assets/icons/soundcloud.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/icons/youtube.svg";
import { ReactComponent as DeezerIcon } from "../../../assets/icons/deezer.svg";
import { ReactComponent as TidalIcon } from "../../../assets/icons/tidal.svg";
import { ReactComponent as BandcampIcon } from "../../../assets/icons/bandcamp.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { MusicLinkContainer, PlatformContainer } from "./MusicItemLink.styles";
import Title from "../../text/Title/Title";
import { IMusicLinkType } from "../../../types";

interface IMusicItemLinkProps {
  data: IMusicLinkType;
  onClickLink: (arg: string) => void;
}

const MusicItemLink: React.FC<IMusicItemLinkProps> = ({
  data,
  onClickLink,
}) => {
  const { name, url } = data;

  const handleLogoClick = () => {
    window.open(url);
  };

  /**
   * @todo I had issues importing svg files as a variable for render so had to create a helper function to assign the right icons for the list items.
   */
  const setIcon = (name: string) => {
    switch (name) {
      case "Spotify":
        return (
          <SpotifyIcon
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        );
      case "Apple Music":
        return (
          <AppleMusicIcon
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        );
      case "Soundcloud":
        return (
          <SoundcloudIcon
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        );
      case "YouTube Music":
        return (
          <YoutubeIcon
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        );
      case "Deezer":
        return (
          <DeezerIcon onClick={handleLogoClick} style={{ cursor: "pointer" }} />
        );
      case "Tidal":
        return (
          <TidalIcon onClick={handleLogoClick} style={{ cursor: "pointer" }} />
        );
      case "Bandcamp":
        return (
          <BandcampIcon
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          />
        );
    }
  };

  return (
    <FlexWrapper direction="horizontal" justify="space-between">
      <PlatformContainer>{setIcon(name)}</PlatformContainer>
      <MusicLinkContainer onClick={() => onClickLink(name)}>
        <FlexWrapper direction="horizontal" justify="space-between">
          <Title text={name} />
          <ArrowIcon style={{ transform: "rotate(270deg)" }} role="link" />
        </FlexWrapper>
      </MusicLinkContainer>
    </FlexWrapper>
  );
};

export default MusicItemLink;
