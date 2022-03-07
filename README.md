# Links Demonstration

This application showcases the UI and functionality of three new link types: Classic, Music Player, and Shows List.

The Classic link should open up a new URL on click.

The Music Player should open up a dropdown with a list of music platforms and these can be clicked to run the audio player/view the song on the platform website.

The Shows List should open up a dropdown with the show timings and these can be clicked to view the show on the event website.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run

To start the project, just run:

1. `npm install`
2. `npm start`
3. Open and view the project on `localhost:3000`

To run the test cases, execute the command:
`npm test`

## Design/Architecture Considerations

To enhance the scalability of the project, my file structure is composed of assets, components, utils, and views.

- Assets
  - Stores all the provided assets for use.
- Components
  - Stores all the individual components.
  - It is further broken down into files for each component to store styles, test cases, and the component itself.
  - If Storybook is used, those stories (eg.`Title.stories.tsx`) can be added in the component's file as well.
  - Ultimately, this structure ensures that each file relevant to a component stay in one file to improve readability as more components are added.
- Utils
  - Stores all the helper code I need such as mock data and custom hooks.
  - These hooks were used to 'simulate' a real API call to mimic real-world usage - may have been easier to just pass in the data as a prop to the component in hindsight.
  - In the future, helper functions may also be added in the Utils.
- Views
  - The pages themselves. In this case, it would just be the Profile page.

As the project scales, it may be useful to add another folder such as 'stores' for state management (eg. Redux) which can store information such as current user + their theme. A 'services' folder can also be considered.

Some of the components developed may also appear a bit redundant (eg. the `Title.tsx` does not need to exist since we can just rely on the `Title.styles.ts` file for any headings). However, this was done because in the future, further customisation of a component may be required (eg. passing in classes as props).

## With More Time

I would focus on the following caveats currently in the project:

- Import Statements

  Rather than using direct file paths, it may have been better to use aliases so files can be imported as `@components` to prevent long-winded import statements is error prone.
  
  ```
  module.exports = {
    extensions: ['ts'],
    resolve: {
      alias: {
        @components: path.resolve(__dirname, 'src/components/'),
        @assets: path.resolve(__dirname, 'src/assets/'),
      },
    },
  };
  ```


- Ordering of links

  Due to time constraints, the order of links is fixed in the order of Show links, Music links, and Classic links. To address this, The `ProfilePage.tsx` should not hard-code the rendering order of links. Instead, it should render links based on either 1. the order set by the mock API or 2. a custom order set by the user itself (done on the front end or back end).

  If time permitted, a 'neater' solution would have been to assume that the 'links' response object returned all links in one array rather than have it returned categorically and to have a 'type' property to check if the link is a show, music or classic link.

- SVG Management

  Currently, SVG assets are required to be imported as hardcoded custom react components rather than being rendered conditionally. This led to a large switch statement being needed in `MusicLinkItem.tsx` to conditionally render the component based on the name prop retrieved.

  With more time, I would have tried to figure out how to load the asset dynamically. A possible solution would be to add a 'imagePath' field in the Music Links response object and pass it in as a prop in the `MusicLinkItem.tsx` to avoid needing the switch statement.

- Music player component

  The current functionality is that once Music Link is clicked, a function is called that would render a div displaying which platform you selected. Given more time, the function would play the music.

- Testing

  Because of the requirement that: "when Show Link is clicked,, the Music Link must close", the parent component `ProfilePage.tsx` currently handles the `isOpen` state of all links. To run the required test cases, the `ProfilePage.tsx` was rendered rather than the actual link component themselves. In addition, I also mocked the return value of the `useLinks()` call to prevent the async promise from running and to prevent the "...loading" text to be rendered instead of the actual links.

  Given more time, more testing should be provided with a focus on testing the link component themselves.

- Styling

  I used the Figma as a guide and it is important to note I did not follow the exact specifications (eg. height and widths of components were not hard-coded with pixel values). This is because I wanted to make the app as responsive as possible given the time constraints. 

  With more time, I would have addressed small styling issues such as the logo not being appended to bottom of page.
