import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Nav } from "./components/Nav.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E9AAA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fdb000",
      contrastText: "#4e4e4e",
    },
    text: {
      primary: "#4e4e4e",
    },
    info: {
      main: "#06d6a0",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>Hello</div>
      <Nav />
    </ThemeProvider>
  );
};

export default App;
