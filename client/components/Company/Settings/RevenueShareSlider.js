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

  const useStyles = makeStyles({
    revenueShareContain: { margin: ".5rem" },
    revenueShareLabel: {
      fontSize: ".75rem",
    },
    revenueShareSlider: { width: 250 },
  });
  const classes = useStyles();

  return (
    <div className={classes.revenueShareContain}>
      <Typography
        id="revenue-share-slider"
        className={classes.revenueShareLabel}
        color="textSecondary"
        gutterBottom
      >
        Revenue Share
      </Typography>
      <Slider
        className={classes.revenueShareSlider}
        defaultValue={revenue.publisherShare}
        getAriaValueText={valuetext}
        aria-labelledby="revenue-share-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks={true}
        min={0.1}
        max={0.9}
      />
    </div>
  );
};

export default Settings;
