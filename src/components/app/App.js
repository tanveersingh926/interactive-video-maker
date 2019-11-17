import React from "react";
import Header from "../header/Header";
import MenuBar from "../menuBar/MenuBar";
import AppRouter from "../../router/AppRouter";
import { APP_TITLE } from "../../constants";

const App = () => {
  return (
    <div>
      <AppRouter>
        <Header title={APP_TITLE}></Header>
        <MenuBar></MenuBar>
      </AppRouter>
    </div>
  );
};

export default App;
