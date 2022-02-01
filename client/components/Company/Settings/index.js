import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import RevenueShareSlider from "./RevenueShareSlider";

const Settings = (props) => {
  const {
    data: {
      name,
      settings: { general, revenue },
    },
  } = props;

  const [enabled, setEnabled] = useState(general.enabled);
  const [testPublisher, setTestPublisher] = useState(general.testPublisher);
  const [accountType, setAccountType] = useState(general.accountType);

  const theme = useTheme();

  const useStyles = makeStyles({
    accountType: { margin: ".5rem" },
    accountTypeLabel: { fontSize: ".75rem" },
    enabled: { margin: ".5rem", marginLeft: 0 },
    revenueShareContain: { margin: ".5rem" },
    revenueShareLabel: {
      fontSize: ".75rem",
    },
    revenueShareSlider: { width: 250 },
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "75vw",
      margin: 10,
      padding: ".5rem",
    },
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
    <Paper elevation={5} className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={3}>
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
        </Grid>
        <Grid item xs={2}>
          <Grid
            className={classes.timezoneContain}
            container
            direction="column"
          >
            <Grid item>
              <Typography color="textSecondary" variant="caption">
                Timezone
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.timezone} variant="body1">
              {general.timezone}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
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
              <Grid container>
                <FormControlLabel
                  value="CTZero"
                  control={<Radio />}
                  label="CTZero"
                />
                <FormControlLabel
                  value="CTLite"
                  control={<Radio />}
                  label="CTLite"
                />
                <FormControlLabel
                  value="CTPlus"
                  control={<Radio />}
                  label="CTPlus"
                />
                <FormControlLabel
                  value="CTPro"
                  control={<Radio />}
                  label="CTPro"
                />
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <RevenueShareSlider publisherShare={revenue.publisherShare} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Settings;
