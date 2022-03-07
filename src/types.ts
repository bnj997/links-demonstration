export interface IClassicLinkType {
  id: string;
  title: string;
  url: string;
}

export interface IShowLinkType {
  id: string;
  title: string;
  events: Array<IShowLinkItemType>;
}

export interface IShowLinkItemType {
  id: string;
  date: string;
  location: string;
  url: string;
  isSoldOut: boolean;
}

export interface IMusicLinkType {
  id: string;
  title: string;
  platforms: Array<IMusicLinkItemType>;
}

export interface IMusicLinkItemType {
  id: string;
  name: string;
  url: string;
}

export interface IProfileType {
  id: string;
  userName: string;
  avatar: string;
  theme: IThemeType;
}

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

export interface ILinkType {
  userId: string;
  classLinks: Array<IClassicLinkType>;
  showsLinks: Array<IShowLinkType>;
  musicLinks: Array<IMusicLinkType>;
}
