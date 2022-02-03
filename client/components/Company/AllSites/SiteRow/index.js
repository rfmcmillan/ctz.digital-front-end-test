import React, { useEffect, useState } from "react";
import {
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Grid,
  Paper,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DoneIcon from "@material-ui/icons/Done";
import ScriptDelaySlider from "./ScriptDelaySlider";

function capitalizeDeviceType(deviceType) {
  const firstLetter = deviceType.slice(0, 1);
  const capitalized = firstLetter.toUpperCase();
  return capitalized + deviceType.slice(1);
}

const SiteRow = (props) => {
  const {
    currSite,
    site,
    site: { activeProducts },
  } = props;
  console.log("🚀 ~ file: index.js ~ line 32 ~ SiteRow ~ site", site);
  console.log("🚀 ~ file: index.js ~ line 32 ~ SiteRow ~ currSite", currSite);

  const theme = useTheme();

  const useStyles = makeStyles({
    button: { marginTop: ".35em" },
    delaySlider: { margin: ".5rem" },
    cell: { border: "0px", textAlign: "left" },
    enabled: { width: 100 },
    id: { textAlign: "left", minWidth: 50 },
    list: {
      margin: "1rem",
      minHeight: 250,
    },
    name: { textAlign: "left", minWidth: 135 },
    root: {
      backgroundColor: "white",
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      margin: "16px 0px 16px 0px",
      width: 670,
    },
    rootCurr: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      margin: "16px 0px 16px 0px",

      width: 670,
    },
    scriptDelay: { width: 250 },
    url: { margin: ".5rem", minWidth: 180 },
  });
  const classes = useStyles();

  const handleClick = (event) => {
    console.log(event.currentTarget.value);
    // setCurrSite(event.currentTarget.value);
    props.func(site.id);
  };

  const devices = {};

  if (activeProducts) {
    for (let i = 0; i < activeProducts.length; i++) {
      const currProduct = activeProducts[i];
      for (let j = 0; j < currProduct.devices.length; j++) {
        const currDevice = currProduct.devices[j];

        if (!devices[currDevice.type]) {
          devices[currDevice.type] = { products: [] };
        }
        devices[currDevice.type].products.push({
          type: currProduct.type,
          enabled: currDevice.enabled,
        });
      }
    }
  }

  const devicesArray = Object.entries(devices);

  return (
    <Paper
      className={currSite.id === site.id ? classes.rootCurr : classes.root}
    >
      <TableRow elevation={5}>
        <TableCell className={`${classes.cell} ${classes.name}`}>
          {site.name || site.displayName}
        </TableCell>

        <TableCell className={`${classes.cell} ${classes.id}`}>
          {site.id}
        </TableCell>

        <TableCell className={`${classes.cell} ${classes.url}`}>
          {site.domain}
        </TableCell>

        <TableCell className={`${classes.cell} ${classes.enabled}`}>
          {site.enabled ? (
            <Chip
              icon={<DoneIcon />}
              size="small"
              label="Enabled"
              color="secondary"
            />
          ) : (
            <Chip size="small" label="Disabled" />
          )}
        </TableCell>
        <Typography align="right" className={classes.button}>
          <IconButton value={site.id} onClick={handleClick}>
            <ChevronRightIcon fontSize="small" color="inherit" />
          </IconButton>
        </Typography>
      </TableRow>
    </Paper>
  );
};

export default SiteRow;
