import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ScriptDelaySlider from "./ScriptDelaySlider";

function capitalizeDeviceType(deviceType) {
  const firstLetter = deviceType.slice(0, 1);
  const capitalized = firstLetter.toUpperCase();
  return capitalized + deviceType.slice(1);
}

const Site = (props) => {
  const { site } = props;
  const { activeProducts } = site;
  const theme = useTheme();

  const useStyles = makeStyles({
    list: {
      backgroundColor: theme.palette.info.contrastText,
      margin: "1rem",
      minHeight: 300,
    },
    root: { margin: 10, padding: ".5rem" },
    scriptDelay: { width: 250 },
  });
  const classes = useStyles();

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
      <Typography variant="caption" color="textSecondary">
        ID
      </Typography>
      <Typography>{site.id}</Typography>
      <Typography variant="caption" color="textSecondary">
        Name
      </Typography>
      <Typography>{site.name ? site.name : site.displayName}</Typography>
      <Typography variant="caption" color="textSecondary">
        Site URL
      </Typography>
      <Typography>{site.domain}</Typography>
      <Typography variant="caption" color="textSecondary">
        Enabled
      </Typography>
      <Typography>{site.enabled ? "Yes" : "No"}</Typography>
      <ScriptDelaySlider scriptDelay={site.scriptDelay} />
      <Grid container>
        {devicesArray.map((device) => {
          return (
            <Grid key={device[0]} item xs={4}>
              <List
                className={classes.list}
                key={device[0]}
                subheader={
                  <ListSubheader>
                    {capitalizeDeviceType(device[0])}
                  </ListSubheader>
                }
              >
                {device[1].products.map((product) => {
                  return (
                    <ListItem key={product.type}>
                      <ListItemText
                        primary={product.type}
                        secondary={product.enabled ? "Enabled" : "Disabled"}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Site;
