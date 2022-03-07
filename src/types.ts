export interface IThemeType {
  id: string;
  name: string;
  colors: {
    links: {
      backgroundColor: string;
      color: string;
    };
    dropdown: {
      backgroundColor: string;
    };
    icons: {
      backgroundColor: string;
    };
  };
  font: {
    sizes: {
      titleSize: string;
      subtitleSize: string;
    };
    family: {
      primary: string;
    };
  };
}

export interface IProfileType {
  name: string;
  avatar: string;
}
