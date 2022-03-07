import React, { useState } from "react";
import { useFetchProfile } from "../../utils/hooks/useFetchProfile";

const ProfilePage: React.FC<{}> = () => {
  const { data, error } = useFetchProfile();

  if (!data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return <div>Profile Page: {data.name}</div>;
};

export default ProfilePage;
