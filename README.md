# Linktree Clone

This application showcases the UI and functionality of three new link types: Classic, Music Player, and Shows List.

The Classic link should open up a new URL on click.

The Music Player should open up a dropdown with a list of music platforms and these can be clicked to run the audio player/view the song on the platform website.

The Shows List should open up a dropdown with the show timings and these can be clicked to view the show on the event website.

This Linktree project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
  - Stores all the provided Linktree assets for use
- Components
  - Stores all the individual components.
  - It is further broken down into files for each component to store styles, test cases, and the component itself.
  - If Storybook is used, those can be added in the component as well.
  - Ultimately, this structure ensures that each file relevant to a component stay in one location to improve readability as more components are added
- Utils
  - Stores all the helper code I need such as mock data and custom hooks.
  - These hooks were used to 'simulate' a real API call to mimic real-world usage.
  - In the future, helper functions may also be used.
- Views
  - The pages themselves. In this case, it would just be the Profile page.

As the project scales, it may be useful to add another folder such as 'stores' for state management (eg. Redux) which can store information such as current user + their theme. A 'services' folder can also be considered.

Some of the components developed may also appear a bit redundant (eg. the `Title.tsx` does not need to exist since we can just rely on the `Title.styles.ts` file for any headings). However, this was done because in the future, further customisation of the component may be required (eg. passing in classes as props).

## with more time

With more time, I would focus on the following caveats currently in the project:

- Ordering of links

  Due to time constraints, the order of links is fixed in the order of Show links, Music links, and Classic links. To address this, The `ProfilePage.tsx` should not hard code the rendering order. Instead, it should render links based on either 1. the order set by the mock API or 2. a custom order set by the user itself (done on the front end or back end).

  If time permitted, a 'neater' solution would have been to assume that the 'links' response object returned all links in one array rather than have it returned categorically and to have a 'type' property to check if the link is a show, music or classic link.

- SVG Management

  Currently, SVG assets are required to be imported as hardcoded custom react components rather than being rendered conditionally. This led to a large switch statement being needed in `MusicLinkItem.tsx` to conditionally render the component based on the name prop retrieved.

  With more time, more time should have been spent figuring out how to load the asset dynamically. A possible solution would be to add a 'imagePath' field in the Music Links response object and pass it in as a prop in the `MusicLinkItem.tsx` to avoid needing the switch statement.

- Music player component

  The current functionality is that once Music Link is clicked, a function is called that would render a div displaying which platform you selected. Given more time, the function would play the music.

- Testing

  Because of the requirement that: "if one link is open, all others must close", the parent component `ProfilePage.tsx` currently handles the `isOpen` state of all links. To run the required test cases, the `ProfilePage.tsx` was rendered rather than the actual link component themselves. In addition, I also mocked the return value of the `useLinks()` call to prevent the async promise from running and to prevent the "...loading" text to be rendered.

  Given more time, more testing should be provided with a focus on testing the link component themselves.
