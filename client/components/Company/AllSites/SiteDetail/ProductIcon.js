import React from "react";
import { Grid, Slider, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import DesktopWindowsRoundedIcon from "@material-ui/icons/DesktopWindowsRounded";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import StayPrimaryPortraitRoundedIcon from "@material-ui/icons/StayPrimaryPortraitRounded";

const ProductIcon = ({ device }) => {
  const useStyles = makeStyles({
    icon: { marginRight: ".5rem" },
  });
  const classes = useStyles();

  if (device === "desktop") {
    return (
      <Icon className={classes.icon}>
        <DesktopWindowsRoundedIcon />
      </Icon>
    );
  } else if (device === "mobile") {
    return (
      <Icon className={classes.icon}>
        <StayPrimaryPortraitRoundedIcon />
      </Icon>
    );
  } else {
    return (
      <Icon className={classes.icon}>
        <TabletMacIcon />
      </Icon>
    );
  }
};

export default ProductIcon;
