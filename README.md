# Interactive Video Maker

This application can be used to create interactive videos to engage viewers by the video creators. You can import Youtube videos by simply using URL and can start adding interactions on the videos.

To run the project, clone this repo and use the following commands

## Available Scripts

Install all the dependencies by running `npm install` and then execute following command `npm run start:server` in one tab of terminal

### `npm run start:server`

Firstly, install json-server using `npm install -g json-server` globally. Then run `npm run start:server`, this command will start json-server at port 3004. This applications use these fake api's to store and retrieve the data.

### `npm start`

Before running this command, please make sure json-server is running. You can use `npm run start:server` to run json-server. Make sure you have json-server installed globally on your system

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test Cases

### `npm test`

This command will start running test cases and will produce result. I have used `@testing-library/react` to write test cases. Various strategies have been used by me for instance I have mocked redux store with `redux-mock-store` package.

If there was some more time I would have completed 90% of code coverage, currently code coverage is 80% and above.

## Specs

### Basic Specs

1. Should work with videos that are hosted on a site like Wistia or Youtube - **Implemented**
2. Should allow creators to prompt viewers with a question - **Implemented**
3. Prompt should be possible at any video time specified by the creator (etc. 2min 30s of a 6 minute video) - **Implemented**
4. Prompt should allow space for a question, and between 2 and 6 text responses - **Implemented**
5. For each response, the behavior can be to resume playback, or link to another URL - **Implemented**
6. Prompt and responses overlaid on video. - **Implemented**
7. The interactive video link can be embedded into another page using HTML and a simple - **Implemented**

### Stretch Specs

1. Custom design (positioning, images for options)
2. Collect an email to keep playing the video - **Implemented**
3. Tweet/share on facebook/linked in to continue playing video
4. Allow responses to trigger files downloads (.pdf, .txt, .xls)
5. Creator can see results of which responses people choose
6. Show the results of polls to viewers after they select a response
7. Anything else that makes it fun and engaging

## Features / Stack

Below is the list of library/framework I used in this project.

- ReactStrap for UI
- React
- Redux
- Redux-Saga
- React Testing Library

Mock Api's are created using `json-server` and data is being stored in `server/db.json`

### Features To Implement

The features I wish to implement in the future.

1.  Edit Interaction
2.  Remove window alerts and use proper Modal with reusable mechanism
3.  View Responses for User/Creator
4.  Delete Video
5.  Error Handling (currently it is partially done)
6.  Confirmation of the video being saved
7.  User login
8.  Real NodeJS express API with mongoDB as database
9.  Display Thumbnails of videos in myVideos page in each card
10. Custom controls of the video player i.e. seekBar, volume and play button

[View at ProductHunt](https://www.producthunt.com/posts/vanhackathon-interactive-video-maker-2)
