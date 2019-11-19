import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import MyVideos from "../components/myVideos/MyVideosConnected";
import AddNewVideo from "../components/addNewVideo/AddNewVideoConnected";
import ConfigureVideo from "../components/configureVideo/ConfigureVideoConnected";
import SharedVideoView from "../components/viewVideo/SharedVideoViewConnected";
import AppWrapper from "./AppWrapper";

const AppRouter = ({ children }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppWrapper route={<HomePage />}>{children}</AppWrapper>
        </Route>
        <Route path="/add-new-video">
          <AppWrapper route={<AddNewVideo />}>{children}</AppWrapper>
        </Route>
        <Route path="/video/:id" exact>
          <AppWrapper route={<ConfigureVideo />}>{children}</AppWrapper>
        </Route>
        <Route path="/video/:id/:embedVideo">
          <AppWrapper
            route={<SharedVideoView />}
            displayParentComponents={false}
          >
            {children}
          </AppWrapper>
        </Route>
        <Route path="/my-videos">
          <AppWrapper route={<MyVideos />}>{children}</AppWrapper>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
