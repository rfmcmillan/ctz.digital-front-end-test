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
import SiteRow from "./SiteRow";
import SiteDetail from "./SiteDetail";

const AllSites = ({ sites }) => {
  const [currSite, setCurrSite] = useState({});

  const theme = useTheme();
  const useStyles = makeStyles({
    cell: {
      border: "0px",
      color: theme.palette.text.secondary,
      fontWeight: 500,
      textAlign: "left",
    },
    enabled: { width: 100 },
    headRow: {},
    id: { textAlign: "left", minWidth: 50 },
    name: {
      textAlign: "left",

      minWidth: 135,
    },
    root: { width: "76.5vw" },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem",
    },
    table: {},
    url: { textAlign: "left", minWidth: 180 },
  });
  const classes = useStyles();

  const getCurrSite = (data) => {
    if (data) {
      const currSiteId = parseInt(data);
      const found = sites.find((site) => site.id === currSiteId);
      setCurrSite(found);
    }
  };

  useEffect(() => {
    console.log("in useEffect", currSite);
  }, [currSite]);

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justifyContent="space-between"
      spacing={2}
    >
      <Grid className={classes.table} item xs={6}>
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
            <TableCell className={`${classes.cell} ${classes.url}`}>
              URL
            </TableCell>
            <TableCell className={`${classes.cell} ${classes.enabled}`}>
              Enabled
            </TableCell>
            <TableCell className={`${classes.cell} `}></TableCell>
          </TableRow>
          {sites.map((site) => {
            return (
              <SiteRow
                currSite={currSite}
                key={site.id}
                func={getCurrSite}
                site={site}
              />
            );
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
