import React, { useState } from "react";
import { FormControlLabel, Paper, Switch, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../data.json";

const Company = () => {
  const {
    name,
    settings: { general },
  } = data;

  const [enabled, setEnabled] = useState(general.enabled);
  const [testPublisher, setTestPublisher] = useState(general.testPublisher);

  const theme = useTheme();
  const useStyles = makeStyles({
    enabled: { margin: 5 },
    name: { fontSize: 20, padding: 10 },
    root: { width: "33vw", margin: 10 },
  });
  const classes = useStyles();

  const handleEnabledToggle = (event) => {
    setEnabled(event.target.checked);
  };

  const handleTestPublisherToggle = (event) => {
    setTestPublisher(event.target.checked);
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.name} variant="h2">
        {name}
      </Typography>

      <FormControlLabel
        className={classes.enabled}
        control={
          <Switch
            checked={enabled}
            onChange={handleEnabledToggle}
            name="enabled"
          ></Switch>
        }
        label={enabled === true ? "Enabled" : "Disabled"}
      />
      <FormControlLabel
        control={
          <Switch
            checked={testPublisher}
            onChange={handleTestPublisherToggle}
            name="test-publisher"
          ></Switch>
        }
        label={
          testPublisher === true ? "Test Publisher" : "Not a Test Publisher"
        }
      />
    </Paper>
  );
};

export default Company;
