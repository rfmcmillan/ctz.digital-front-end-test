import React from "react";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Nav = () => {
  const theme = useTheme();

  const useStyles = makeStyles({});
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolBar}>
        <img src="../public/assets/clicktripz-logo.svg" />
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
