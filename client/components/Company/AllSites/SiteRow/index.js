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
    button: { marginTop: ".25em" },
    delaySlider: { margin: ".5rem" },
    cell: { border: "0px", width: 200, textAlign: "center" },
    enabled: { width: 100 },
    id: { width: 100 },
    list: {
      margin: "1rem",
      minHeight: 250,
    },
    name: { margin: ".5rem" },
    root: {
      backgroundColor: "white",
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      margin: "10px 0px 10px 0px",
      maxWidth: 780,
    },
    rootCurr: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      margin: "10px 0px 10px 0px",
      maxWidth: 780,
    },
    scriptDelay: { width: 250 },
    url: { margin: ".5rem" },
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
        <TableCell className={classes.cell}>
          {site.name || site.displayName}
        </TableCell>

        <TableCell className={`${classes.cell} ${classes.id}`}>
          {site.id}
        </TableCell>

        <TableCell className={classes.cell}>{site.domain}</TableCell>

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
        <Typography className={classes.button}>
          <IconButton value={site.id} onClick={handleClick}>
            <ChevronRightIcon fontSize="small" color="inherit" />
          </IconButton>
        </Typography>
      </TableRow>
    </Paper>
  );
};

export default SiteRow;
