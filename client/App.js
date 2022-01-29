import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Nav from "./components/Nav";
import Company from "./components/Company";

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
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Company />
    </ThemeProvider>
  );
};

export default App;
