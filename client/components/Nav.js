import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Nav = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    logoText: {
      fontFamily: "Fredoka One",
      fontSize: 25,
      fontWeight: 900,
      marginLeft: 10,
    },
    root: { backgroundColor: theme.palette.text.primary, boxShadow: "none" },
    toolBar: { padding: 10 },
  });
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <img
          width="70px"
          src="./assets/clicktripz-logo.svg"
          alt="Clicktripz Logo"
        />
        <Typography variant="h1" className={classes.logoText}>
          Clicktripz
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
