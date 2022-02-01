import React, { useEffect, useState } from "react";
import {
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
import ScriptDelaySlider from "./ScriptDelaySlider";

function capitalizeDeviceType(deviceType) {
  const firstLetter = deviceType.slice(0, 1);
  const capitalized = firstLetter.toUpperCase();
  return capitalized + deviceType.slice(1);
}

const Site = ({ site }) => {
  const { activeProducts } = site;
  const [currSite, setCurrSite] = useState();
  const theme = useTheme();

  const useStyles = makeStyles({
    delaySlider: { margin: ".5rem" },
    cell: { border: "0px" },
    enabled: { margin: ".5rem" },
    id: { margin: ".5rem" },
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
    },
    scriptDelay: { width: 250 },
    url: { margin: ".5rem" },
  });
  const classes = useStyles();

  const handleClick = (event) => {
    console.log(event.currentTarget.value);
    setCurrSite(event.currentTarget.value);
  };

  useEffect(() => {
    console.log("currSite:", currSite);
  }, [currSite]);

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
    <Paper className={classes.root}>
      <TableRow elevation={5}>
        <TableCell className={classes.cell}>
          {site.name || site.displayName}
        </TableCell>

        <TableCell className={classes.cell}>{site.id}</TableCell>

        <TableCell className={classes.cell}>{site.domain}</TableCell>

        <TableCell className={classes.cell}>
          {site.enabled ? "Yes" : "No"}
        </TableCell>
        <Typography className={classes.button}>
          <IconButton
            value={site.name || site.displayName}
            onClick={handleClick}
          >
            <ChevronRightIcon fontSize="small" color="inherit" />
          </IconButton>
        </Typography>
      </TableRow>
    </Paper>
  );
};

export default Site;
