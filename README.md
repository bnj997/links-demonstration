# Linktree Clone

This application showcases the UI and functionality of three new link types: Classic, Music Player anmd Shows List.

The Classic link should open up a new URL on click.

The Music Player should open up a dropdown with a list of music platforms and these can be clicked to run the audio player/view the song on the platform website.

The Shows List should open up a dropdown with the show timings and these can be clicked to view the show on the event website.

This linktree project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

To start the project, just run:

### `yarn start`

To run the test cases, execute the command:

### `yarn test`

## Design Considerations

To enhance reusability of components, my file structure is composed of assets, components, utils and views.

- assets -> stores all the provided linktree assets for use
- components -> stores all the indivivual components. It is further broken down into files for each component to store styles, test cases and the component itself.
- utils -> stores all the helper code I need such as mock api responses and hooks
- views -> the pages itself. In this case, it would just be the Profile page.

## with more time

TBD
