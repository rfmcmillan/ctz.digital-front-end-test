import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Site from "./SiteRow";
import SiteDetail from "./SiteDetail";

const AllSites = ({ sites }) => {
  const [currSite, setCurrSite] = useState({});

  const theme = useTheme();
  const useStyles = makeStyles({
    cell: {
      border: "0px",
      color: theme.palette.text.secondary,
      fontWeight: 500,
      textAlign: "center",
      width: 200,
    },
    enabled: { width: 100 },
    headRow: {},
    id: { width: 100 },
    name: {
      width: 200,
    },
    root: { width: "76vw" },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem",
    },
  });
  const classes = useStyles();

  const getCurrSite = (data) => {
    if (data) {
      console.log("inParent:", parseInt(data));
      const currSiteId = parseInt(data);
      const found = sites.find((site) => site.id === currSiteId);
      console.log(
        "🚀 ~ file: index.js ~ line 57 ~ useEffect ~ filtered",
        found
      );
      setCurrSite(found);
    } // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };

  useEffect(() => {
    console.log("in useEffect", currSite);
  }, [currSite]);

  return (
    <Grid className={classes.root} container justifyContent="space-between">
      <Grid item xs={6}>
        <div>
          <Typography className={classes.sitesHeading} variant="h2">
            Sites
          </Typography>

          <TableRow className={classes.headRow} elevation={0}>
            <TableCell className={`${classes.cell} ${classes.name}`}>
              Name
            </TableCell>
            <TableCell className={`${classes.cell} ${classes.id}`}>
              ID
            </TableCell>
            <TableCell className={classes.cell}>URL</TableCell>
            <TableCell className={`${classes.cell} ${classes.enabled}`}>
              Enabled
            </TableCell>
          </TableRow>
          {sites.map((site) => {
            return <Site key={site.id} func={getCurrSite} site={site} />;
          })}
        </div>
      </Grid>
      <Grid item xs={6}>
        {currSite.id ? (
          <SiteDetail site={currSite} />
        ) : (
          <SiteDetail site={{}} />
        )}
      </Grid>
    </Grid>
  );
};

export default AllSites;
