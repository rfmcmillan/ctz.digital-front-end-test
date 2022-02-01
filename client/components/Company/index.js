import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../../data.json";
import Settings from "./Settings";

import AllSites from "./AllSites";
import { Grid, Typography } from "@material-ui/core";

const Company = () => {
  const { sites } = data;
  const theme = useTheme();
  const useStyles = makeStyles({
    contain: {},
    name: {
      color: theme.palette.text.primary,
      fontSize: "2rem",
      fontWeight: "700",
      margin: ".5rem",
    },
    root: { backgroundColor: theme.palette.info.contrastText },
    siteHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      margin: ".5rem",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.name} variant="h2">
        {data.name}
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.contain}
      >
        <Grid item>
          <Settings data={data} />
        </Grid>
        <Grid item>
          <AllSites sites={sites} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;
