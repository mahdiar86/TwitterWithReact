import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { Typography } from "@material-ui/core";
import useStyles from "./Style";

const Header = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      {icon}
      <Typography className={classes.headerTitle}>{title}</Typography>
    </div>
  );
};

export default Header;
