import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTerms from "./CustomTerms";
import DefaultTerms from "./DefaultTerms";

const Terms = () => {
  const useStyles = makeStyles({});
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "85vh" }}
    >
      <Grid
        item
        container
        className={classes.root}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <DefaultTerms />
        </Grid>
        <Grid item xs={3}>
          <CustomTerms />
        </Grid>
      </Grid>
    </Grid>
  );
};

Terms.propTypes = {};

export default Terms;
