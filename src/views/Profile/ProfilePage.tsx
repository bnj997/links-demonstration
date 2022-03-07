import React, { useState } from "react";
import FlexWrapper from "../../components/layouts/wrappers/FlexWrapper/FlexWrapper";
import ClassicLink from "../../components/links/Classic/ClassicLink";
import ShowsLink from "../../components/links/Shows/ShowsLink";
import { useFetchProfile } from "../../utils/hooks/useFetchProfile";

const ProfilePage: React.FC<{}> = () => {
  const { data, error } = useFetchProfile();
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
  if (!data) {
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
      <ShowsLink
        items={data.showsLinks}
        onClick={() => handlePress("shows")}
        isOpen={openedDropdown === "shows"}
      />
      {data.classLinks.map((link, i) => {
        return <ClassicLink key={i} data={link} />;
      })}
    </FlexWrapper>
  );
};

export default ProfilePage;
