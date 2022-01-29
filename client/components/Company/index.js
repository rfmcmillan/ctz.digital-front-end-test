import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import data from "../../../data.json";
import Settings from "./Settings";
import Site from "./Site";
import { Typography } from "@material-ui/core";

const Company = () => {
  const { sites } = data;

  const useStyles = makeStyles({
    name: { fontSize: "1.5rem", margin: ".5rem" },
    siteHeading: { fontSize: "1.5rem", margin: ".5rem" },
  });
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.name} variant="h2">
        {data.name}
      </Typography>
      <Settings data={data} />
      <Typography className={classes.siteHeading} variant="h3">
        Sites
      </Typography>
      {sites.map((site) => {
        return <Site key={site.id} site={site} />;
      })}
    </div>
  );
};

export default Company;
