import React, { useState } from "react";
import FlexWrapper from "../../components/layouts/wrappers/FlexWrapper/FlexWrapper";
import ClassicLink from "../../components/links/Classic/ClassicLink";
import MusicLink from "../../components/links/Music/MusicLink";
import ShowsLink from "../../components/links/Shows/ShowLink";
import Avatar from "../../components/profile/Avatar";
import { ReactComponent as LinktreeLogo } from "../../assets/logo.svg";
import { useLinks } from "../../utils/hooks/useLinks";
import { IProfileType } from "../../types";

interface IProfilePageProps {
  profile: IProfileType;
}

const ProfilePage: React.FC<IProfilePageProps> = ({ profile }) => {
  const { links, error } = useLinks();
  const [openedDropdown, setOpenedDropdown] = useState("");

  const handlePress = (type: string) => {
    if (openedDropdown === type) {
      setOpenedDropdown("");
    } else {
      setOpenedDropdown(type);
    }
  };

  /**
   * @todo Use an actual loading icon.
   */
  if (!links) {
    return <h1>Loading...</h1>;
  }

  /**
   * @todo Make an actual error component so it looks a bit cleaner
   */
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <FlexWrapper direction="column" justify="space-between">
      <Avatar name={profile.userName} avatar={profile.avatar} />
      {links.showsLinks.map((showLink) => (
        <ShowsLink
          key={showLink.id}
          events={showLink.events}
          onClick={() => handlePress("shows")}
          isOpen={openedDropdown === "shows"}
        />
      ))}
      {links.musicLinks.map((musicLink) => (
        <MusicLink
          key={musicLink.id}
          platforms={musicLink.platforms}
          onClick={() => handlePress("music")}
          isOpen={openedDropdown === "music"}
        />
      ))}
      {links.classLinks.map((classicLink) => (
        <ClassicLink key={classicLink.id} data={classicLink} />
      ))}
      <LinktreeLogo style={{ margin: "5em" }} />
    </FlexWrapper>
  );
};

export default ProfilePage;
