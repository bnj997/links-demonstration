import React from "react";
import FlexWrapper from "../../components/layouts/wrappers/FlexWrapper/FlexWrapper";
import ClassicLink from "../../components/links/Classic/ClassicLink";
import { useFetchProfile } from "../../utils/hooks/useFetchProfile";

const ProfilePage: React.FC<{}> = () => {
  const { data, error } = useFetchProfile();

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
      {data.classLinks.map((link, i) => {
        return <ClassicLink key={i} data={link} />;
      })}
    </FlexWrapper>
  );
};

export default ProfilePage;
