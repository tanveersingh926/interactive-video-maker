# Interactive Video Maker

This application can be used to create interactive videos to engage viewers by the video creators. You can import Youtube videos by simply using URL and can start adding interactions on the videos.

To run the project, clone this repo and use the following commands

## Available Scripts

Install all the dependencies by running `npm install` and then execute following command `npm run start:server` in one tab of termina

### `npm run start:server`

Firstly, install json-server using `npm install -g json-server` globally. Then run `npm run start:server`, this command will start json-server at port 3004. This applications use these fake api's to store and retrieve the data.

### `npm start`

Before running this command, please make sure json-server is running. You can use `npm run start:server` to run json-server. Make sure you have json-server installed globally on your system
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Test Cases

### `npm test`

This command will start running test cases and will produce result. I have used `@testing-library/react` to write test cases. Various strategies have been used by me for instance I have mocked redux store with `redux-mock-store` package.

If there was some more time I would have completed 90% of code coverage, currently code coverage is 80%.
