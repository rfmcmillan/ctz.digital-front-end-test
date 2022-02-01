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

const SiteDetail = (props) => {
  const { site } = props;
  const { activeProducts } = site;
  const theme = useTheme();

  const useStyles = makeStyles({
    delaySlider: { margin: ".5rem" },
    enabled: { margin: ".5rem" },
    id: { margin: ".5rem" },
    list: {
      margin: "1rem",
      minHeight: 250,
    },
    name: { margin: ".5rem" },
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",

      padding: ".75rem",
    },
    scriptDelay: { width: 250 },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem",
    },
    url: { margin: ".5rem" },
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
    <div>
      <Typography className={classes.sitesHeading} variant="h2">
        Site Detail
      </Typography>
      <Paper elevation={5} className={classes.root}>
        <Grid container>
          <Grid item container direction="column" xs={6}>
            <Grid item className={classes.name}>
              <Typography variant="caption" color="textSecondary">
                Name
              </Typography>
              <Typography>
                {site.name ? site.name : site.displayName}
              </Typography>
            </Grid>
            <Grid className={classes.id} item>
              <Typography variant="caption" color="textSecondary">
                ID
              </Typography>
              <Typography>{site.id}</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} direction="column">
            <Grid className={classes.url} item>
              <Typography variant="caption" color="textSecondary">
                Site URL
              </Typography>
              <Typography>{site.domain}</Typography>
            </Grid>
            <Grid item className={classes.enabled}>
              <Typography variant="caption" color="textSecondary">
                Enabled
              </Typography>
              <Typography>{site.enabled ? "Yes" : "No"}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <ScriptDelaySlider
          className={classes.delaySlider}
          scriptDelay={site.scriptDelay}
        />
        <Grid container>
          {devicesArray.map((device) => {
            return (
              <Grid key={device[0]} item xs={4}>
                <List
                  className={classes.list}
                  dense={true}
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
    </div>
  );
};

export default SiteDetail;
