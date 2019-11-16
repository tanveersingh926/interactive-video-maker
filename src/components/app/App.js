import React from "react";
import { ThemeProvider } from "styled-components";
import Video from "../videoPlayer/Video";
import logo from "./logo.svg";
import { theme, GlobalStyles, Name } from "../../styles";
import {
  AppHeader,
  AppLink,
  AppLogo,
  App as AppContainer
} from "./styled.components";

function App(props) {
  var tte = 0;
  console.log(tte);
  props.updateNewTokens({ newTokens: 2000 });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer className="App">
        {/* <AppHeader className="App-header">
          <AppLogo src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
          <Name>Tanveer</Name>
        </AppHeader> */}
        <Video id="ZTrU9n5o0zk" />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
