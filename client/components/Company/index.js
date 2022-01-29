import React, { useState } from "react";
import {
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import data from "../../../data.json";

const Company = () => {
  const {
    name,
    settings: { general },
  } = data;

  const [enabled, setEnabled] = useState(general.enabled);
  const [testPublisher, setTestPublisher] = useState(general.testPublisher);
  const [accountType, setAccountType] = useState(general.accountType);

  const theme = useTheme();

  const useStyles = makeStyles({
    enabled: { margin: ".5rem" },
    name: { fontSize: "1.5rem", padding: 10 },
    root: { width: "33vw", margin: 10 },
    testPublisher: { margin: ".5rem" },
    timezoneContain: { margin: ".5rem" },
    timezoneLabel: { color: theme.palette.text.secondary },
  });
  const classes = useStyles();

  const handleEnabledToggle = (event) => {
    setEnabled(event.target.checked);
  };

  const handleTestPublisherToggle = (event) => {
    setTestPublisher(event.target.checked);
  };

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.checked);
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
            inputProps={{ "aria-label": "Enabled Switch" }}
            onChange={handleEnabledToggle}
            name="enabled"
          ></Switch>
        }
        label={enabled === true ? "Enabled" : "Disabled"}
      />

      <FormControlLabel
        className={classes.testPublisher}
        control={
          <Switch
            checked={testPublisher}
            inputProps={{ "aria-label": "Test Publisher Switch" }}
            onChange={handleTestPublisherToggle}
            name="test-publisher"
          ></Switch>
        }
        label={
          testPublisher === true ? "Test Publisher" : "Not a Test Publisher"
        }
      />
      <Grid className={classes.timezoneContain} container direction="column">
        <Grid item>
          <Typography className={classes.timezoneLabel} variant="caption">
            Timezone
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.timezone} variant="body1">
            {general.timezone}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Company;
