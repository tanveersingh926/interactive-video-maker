import React from "react";
// import Video from "../videoPlayer/Video";
import Header from "../header/Header";
import MenuBar from "../menuBar/MenuBar";
import AppRouter from "../../router/AppRouter";
import { APP_TITLE } from "../../constants";
// import Example from "../menuBar/dump";

function App(props) {
  // props.updateNewTokens({ newTokens: 2000 });
  return (
    <div>
      <AppRouter>
        <Header title={APP_TITLE}></Header>
        <MenuBar></MenuBar>
        {/* <Example></Example> */}
      </AppRouter>
    </div>
  );
}

export default App;

/* <Video id="ZTrU9n5o0zk" /> */
