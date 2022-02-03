import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Terms = () => {
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "75vw",
      [theme.breakpoints.down("lg")]: {
        width: "90vw",
      },
    },
  });
  const classes = useStyles();

  return (
    <Paper elevation={5} className={classes.root}>
      <Typography>Terms of Service</Typography>
    </Paper>
  );
};

Terms.propTypes = {
  data: PropTypes.object,
};

export default Terms;
