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

const Site = (props) => {
  const { site } = props;
  const theme = useTheme();

  const useStyles = makeStyles({
    root: { width: "33vw", margin: 10, padding: ".5rem" },
  });
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="caption" color="textSecondary">
        ID
      </Typography>
      <Typography>{site.id}</Typography>
      <Typography variant="caption" color="textSecondary">
        Name
      </Typography>
      <Typography>{site.name}</Typography>
      <Typography variant="caption" color="textSecondary">
        Site URL
      </Typography>
      <Typography>{site.domain}</Typography>
    </Paper>
  );
};

export default Site;
