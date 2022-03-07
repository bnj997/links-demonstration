import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { USER_PREFERENCE } from "../../../utils/mock/USER_PREFERENCE";
import ProfilePage from "../ProfilePage";

/**
 * @todo there may be a better way to mock the response. Using variables are not allowed as jest.mock is hoisted so resorted to just hard coding the response.
 */
jest.mock("../../../utils/hooks/useFetchProfile", () => ({
  useFetchProfile: () => ({
    data: {
      name: "@lorde",
      avatar: "../../assets/profile-picture.png",
      classLinks: [
        {
          title: "Website",
          url: "https://www.lorde.co.nz/",
        },
        {
          title: "Facebook",
          url: "https://www.facebook.com/lordemusic",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/lorde/?hl=en",
        },
      ],
      showsLinks: [
        {
          date: "Apr 03 2022",
          location: "Opry House, Nashville",
          url: "https://www.songkick.com/concerts/39894790-lorde-at-opry-house",
          isSoldOut: false,
        },
        {
          date: "Apr 05 2022",
          location: "Masonic Teple Theater, Detroit",
          url: "https://www.songkick.com/concerts/39894796-lorde-at-masonic-temple-theater",
          isSoldOut: true,
        },
        {
          date: "Apr 07 2022",
          location: "Salle Willfrid Pelletier, Montreal",
          url: "https://www.songkick.com/concerts/39894801-lorde-at-salle-willfrid-pelletier",
          isSoldOut: false,
        },
        {
          date: "Apr 08 2022",
          location: "Meridian Hall, Toronto",
          url: "https://www.songkick.com/concerts/39894802-lorde-at-meridian-hall",
          isSoldOut: false,
        },
        {
          date: "Apr 09 2022",
          location: "Meridian Hall, Toronto",
          url: "https://www.songkick.com/concerts/39901324-lorde-at-meridian-hall",
          isSoldOut: false,
        },
        {
          date: "Apr 12 2022",
          location: "Boch Center Wang Theatre, Boston",
          url: "https://www.songkick.com/concerts/39894804-lorde-at-boch-center-wang-theatre",
          isSoldOut: false,
        },
        {
          date: "Apr 13 2022",
          location: "Boch Center Wang Theatre, Boston",
          url: "https://www.songkick.com/concerts/39901334-lorde-at-boch-center-wang-theatre",
          isSoldOut: false,
        },
      ],
      musicLinks: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0AtdTy",
        },
        {
          name: "Apple Music",
          url: "https://music.apple.com/au/artist/lorde/602767352",
        },
        {
          name: "Soundcloud",
          url: "https://soundcloud.com/lordemusic",
        },
        {
          name: "YouTube Music",
          url: "https://www.youtube.com/channel/UCOxhwqKKlVq_NaD0LVffGuw",
        },
        {
          name: "Deezer",
          url: "https://www.deezer.com/en/artist/4448485",
        },
        {
          name: "Tidal",
          url: "https://tidal.com/browse/artist/4931831",
        },
        {
          name: "Bandcamp",
          url: "https://bandcamp.com/tag/lorde",
        },
      ],
    },
  }),
}));

/**
 * @todo Since the profile page handles state management for each link, rendering the entire profile page for each test was easiest way to mock click events.
 *       There may be another way to mock the click event such that you only need to mock the link component rather than the entire page.
 */

// const setupPage = () =>
//   render(
//     <ThemeProvider theme={USER_PREFERENCE}>
//       <ProfilePage />
//     </ThemeProvider>
//   );

describe("Shows List", () => {
  describe("When a user clicks on a Show List Link", () => {
    it.each`
      date
      ${"Apr 03 2022"}
      ${"Apr 05 2022"}
      ${"Apr 07 2022"}
      ${"Apr 08 2022"}
      ${"Apr 09 2022"}
      ${"Apr 12 2022"}
      ${"Apr 13 2022"}
    `("the $date show is visible", ({ date }) => {
      render(
        <ThemeProvider theme={USER_PREFERENCE}>
          <ProfilePage />
        </ThemeProvider>
      );
      fireEvent.click(screen.getByText("Shows"));
      expect(screen.getByText(date)).toBeVisible();
    });
  });
});

describe("Music Links", () => {
  describe("When a user clicks on a Music Player Link", () => {
    it.each`
      platform
      ${"Spotify"}
      ${"Apple Music"}
      ${"Soundcloud"}
      ${"YouTube Music"}
      ${"Deezer"}
      ${"Tidal"}
      ${"Bandcamp"}
    `("the $platform title is visible", ({ platform }) => {
      render(
        <ThemeProvider theme={USER_PREFERENCE}>
          <ProfilePage />
        </ThemeProvider>
      );
      fireEvent.click(screen.getByText("Music"));
      expect(screen.getByText(platform)).toBeVisible();
    });
  });

  describe("When a user clicks on a Music Player Link and then a Shows List Link", () => {
    it("the Music Player Link closes", () => {
      render(
        <ThemeProvider theme={USER_PREFERENCE}>
          <ProfilePage />
        </ThemeProvider>
      );

      const musicLink = screen.getByText("Music");
      const showLink = screen.getByText("Shows");
      fireEvent.click(musicLink);
      expect(screen.getByText("Spotify")).toBeVisible();
      fireEvent.click(showLink);
      expect(screen.queryByText("Spotify")).toBeNull();
    });
  });
});
