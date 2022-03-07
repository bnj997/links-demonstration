import { useState, useEffect } from "react";
import { IThemeType } from "../../types";
import { USER_PREFERENCE } from "../mock/USER_PREFERENCE";

export const useTheme = () => {
  const [theme, setTheme] = useState<IThemeType>({
    id: "",
    name: "",
    colors: {
      links: {
        backgroundColor: "",
        color: "",
      },
      dropdown: {
        backgroundColor: "",
      },
    },
    font: {
      sizes: {
        titleSize: "",
        subtitleSize: "",
      },
      family: {
        primary: "",
      },
    },
  });

  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getTheme = async () => {
      try {
        const theme = await Promise.resolve(USER_PREFERENCE);
        setTheme(theme);
      } catch (error) {
        setError("an error occured");
      }
    };
    getTheme();
  }, []);

  return { theme, error };
};
