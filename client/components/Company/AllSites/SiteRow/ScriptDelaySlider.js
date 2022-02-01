import React from "react";
import { Grid, Slider, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

function valuetext(value) {
  return `${value} milliseconds`;
}

function valueLabelFormat(value) {
  return `${value.toLocaleString()}`;
}

const ScriptDelaySlider = (props) => {
  const { scriptDelay } = props;

  const useStyles = makeStyles({
    scriptDelayContain: { margin: ".5rem" },
    scriptDelaySlider: { marginLeft: ".5rem", width: 250 },
  });
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: "0 ms",
    },
    {
      value: 1000,
    },
    {
      value: 2000,
    },
    {
      value: 3000,
    },
    {
      value: 4000,
    },
    {
      value: 5000,
    },
    {
      value: 6000,
    },
    {
      value: 7000,
    },
    {
      value: 8000,
    },
    {
      value: 9000,
    },
    {
      value: 10000,
      label: "10,000 ms",
    },
  ];

  return (
    <Grid className={classes.scriptDelayContain} container direction="column">
      <Grid item>
        <Typography
          id="script-delay-slider"
          color="textSecondary"
          gutterBottom
          variant="caption"
        >
          Script Delay
        </Typography>
      </Grid>
      <Grid item>
        <Slider
          className={classes.scriptDelaySlider}
          defaultValue={scriptDelay}
          getAriaValueText={valuetext}
          aria-labelledby="script-delay-slider"
          valueLabelDisplay="auto"
          valueLabelFormat={valueLabelFormat}
          step={1000}
          marks={marks}
          min={0}
          max={10000}
        />
      </Grid>
    </Grid>
  );
};

export default ScriptDelaySlider;
