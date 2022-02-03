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
    allSites: {},
    contain: {},
    name: {
      color: theme.palette.text.primary,
      fontSize: "2rem",
      fontWeight: "700",
      margin: ".5rem",
    },
    root: { backgroundColor: theme.palette.info.contrastText },
    settingsHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem .5rem .5rem 1rem",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.contain}
        spacing={1}
      >
        <Grid item>
          <Typography className={classes.name} variant="h2">
            {data.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.settingsHeading} variant="h2">
            Settings
          </Typography>
          <Settings data={data} />
        </Grid>
        <Grid item>
          <AllSites classes={classes.allSites} sites={sites} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Company;
