import { ThemeProvider } from "styled-components";
import { useTheme } from "./utils/hooks/useTheme";
import React from "react";
import ProfilePage from "./views/Profile/ProfilePage";

const App: React.FC<{}> = () => {
  const { theme, error } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ProfilePage />
    </ThemeProvider>
  );
};

export default App;
