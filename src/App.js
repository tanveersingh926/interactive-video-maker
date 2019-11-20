import React, { useState } from "react";
import Header from "./components/header/Header";
import MenuBar from "./components/menuBar/MenuBar";
import AppRouter from "./router/AppRouter";
import { Spinner } from "reactstrap";
import { APP_TITLE } from "./constants";
import { configureAxios } from "./services";

const spinnerForLoading = setLoading => {
  window.onload = () => {
    setLoading(false);
  };
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  spinnerForLoading(setLoading);
  configureAxios(setLoading);
  return (
    <div>
      {isLoading && (
        <div className="loader">
          <Spinner color="primary" className="spinner-center" />
        </div>
      )}
      <AppRouter>
        <Header title={APP_TITLE}></Header>
        <MenuBar></MenuBar>
      </AppRouter>
    </div>
  );
};

export default App;
