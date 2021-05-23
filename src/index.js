import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Components/Routes";

import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#583299",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-right" autoClose={3500} transition={Slide} />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);