import React from "react";
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
import Site from "./Site";

const AllSites = ({ sites }) => {
  console.log("🚀 ~ file: index.js ~ line 19 ~ AllSites ~ sites", sites);

  const theme = useTheme();

  const useStyles = makeStyles({
    cell: {
      color: theme.palette.text.secondary,
      fontWeight: 500,
    },
    name: {
      width: 200,
    },
    root: {
      borderRadius: 12,
      boxShadow:
        "0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)",
      width: "33vw",
      margin: 10,
      padding: ".5rem",
    },
    sitesHeading: {
      color: theme.palette.text.primary,
      fontSize: "1.5rem",
      fontWeight: "700",
      margin: ".5rem",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.sitesHeading} variant="h2">
        Sites
      </Typography>

      <TableRow
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          padding: "0px 18px",
          mb: "-0.125rem",
          bgcolor: "transparent",
        }}
        elevation={0}
      >
        <TableCell className={`${classes.cell} ${classes.name}`}>
          Name
        </TableCell>
        <TableCell className={classes.cell}>ID</TableCell>
        <TableCell className={classes.cell}>URL</TableCell>
        <TableCell className={classes.cell}>Enabled</TableCell>
      </TableRow>
      {sites.map((site) => {
        return <Site site={site} />;
      })}
    </div>
  );
};

export default AllSites;
