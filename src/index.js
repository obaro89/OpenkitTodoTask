import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./store";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#aa54db",
      darker: "#7722a9",
      lighter: "#de84ff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
