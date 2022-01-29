import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../data.json";

const Company = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    name: { fontSize: 20, margin: 10, padding: 10 },
    root: { width: "33vw" },
  });
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h2">
        {data.name}
      </Typography>
    </Paper>
  );
};

export default Company;
