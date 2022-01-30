import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../../data.json";
import Settings from "./Settings";
import Site from "./Site";
import { Grid, Typography } from "@material-ui/core";

const Company = () => {
  const { sites } = data;
  const theme = useTheme();
  const useStyles = makeStyles({
    name: { fontSize: "1.5rem", margin: ".5rem" },
    root: { backgroundColor: theme.palette.info.contrastText },
    siteHeading: { fontSize: "1.5rem", margin: ".5rem" },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.name} variant="h2">
        {data.name}
      </Typography>
      <Settings data={data} />
      <Typography className={classes.siteHeading} variant="h3">
        Sites
      </Typography>
      <Grid container>
        {sites.map((site) => {
          return (
            <Grid key={site.id} item xs={6}>
              <Site key={site.id} site={site} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Company;
