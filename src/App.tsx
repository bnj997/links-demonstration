import { ThemeProvider } from "styled-components";
import React from "react";
import ProfilePage from "./views/Profile/ProfilePage";
import { useFetchProfile } from "./utils/hooks/useFetchProfile";

const App: React.FC<{}> = () => {
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
    <ThemeProvider theme={data.theme}>
      <ProfilePage profile={data} />
    </ThemeProvider>
  );
};

export default App;
