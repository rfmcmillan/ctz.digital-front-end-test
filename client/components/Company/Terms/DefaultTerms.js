import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTerms from "./CustomTerms";

const DefaultTerms = () => {
  const useStyles = makeStyles({
    contain: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      padding: "1rem",
    },
  });
  const classes = useStyles();

  return <div></div>;
};

DefaultTerms.propTypes = {};

export default DefaultTerms;
