import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import RevenueShareSlider from "./RevenueShareSlider";

function valuetext(value) {
  return `${value}`;
}

const Settings = (props) => {
  const {
    data: {
      name,
      settings: { general, revenue },
    },
  } = props;

  console.log("name:", name);
  const [enabled, setEnabled] = useState(general.enabled);
  const [testPublisher, setTestPublisher] = useState(general.testPublisher);
  const [accountType, setAccountType] = useState(general.accountType);

  const theme = useTheme();

  const useStyles = makeStyles({
    accountType: { margin: ".5rem" },
    accountTypeLabel: { fontSize: ".75rem" },
    enabled: { margin: ".5rem" },
    revenueShareContain: { margin: ".5rem" },
    revenueShareLabel: {
      fontSize: ".75rem",
    },
    revenueShareSlider: { width: 250 },
    root: { width: "33vw", margin: 10, padding: ".5rem" },
    testPublisher: { margin: ".5rem" },
    timezoneContain: { margin: ".5rem" },
  });
  const classes = useStyles();

  const handleEnabledToggle = (event) => {
    const { target } = event;
    setEnabled(target.checked);
  };

  const handleTestPublisherToggle = (event) => {
    const { target } = event;
    setTestPublisher(target.checked);
  };

  const handleAccountTypeChange = (event) => {
    const { target } = event;
    setAccountType(target.value);
  };

  return (
    <Paper className={classes.root}>
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
          <Typography color="textSecondary" variant="caption">
            Timezone
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.timezone} variant="body1">
            {general.timezone}
          </Typography>
        </Grid>
      </Grid>
      <FormControl className={classes.accountType} component="fieldset">
        <FormLabel className={classes.accountTypeLabel} component="legend">
          Account Type
        </FormLabel>
        <RadioGroup
          aria-label="account-type"
          name="account-type"
          value={accountType}
          onChange={handleAccountTypeChange}
        >
          <FormControlLabel value="CTZero" control={<Radio />} label="CTZero" />
          <FormControlLabel value="CTLite" control={<Radio />} label="CTLite" />
          <FormControlLabel value="CTPlus" control={<Radio />} label="CTPlus" />
          <FormControlLabel value="CTPro" control={<Radio />} label="CTPro" />
        </RadioGroup>
      </FormControl>
      <RevenueShareSlider publisherShare={revenue.publisherShare} />
    </Paper>
  );
};

export default Settings;
