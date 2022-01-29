import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#2A9D8F",
      contrastText: "#264653",
    },
    text: {
      primary: "#264653",
      secondary: "#2A9D8F",
    },
    info: {
      main: "#2A9D8F",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
};

export default App;
