import { ButtonBase, Grid, Typography } from "@material-ui/core";
import { React, useEffect , useState } from "react";
import axios from "axios";import useStyles from "./Styles";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { getHashTags } from "../../api/api_twittes";

const RightSidebar = () => {
  const classes = useStyles();

  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    getHashTags((isOk,data)=> {
      if(isOk) {
        setHashTags(data);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      <Link to={"/"}>
        <Grid container direction={"row"} alignItems={"center"}>
          <Grid item>
            <img src={"/images/logo.png"} />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>توییتر فارسی</Typography>
          </Grid>
        </Grid>
      </Link>

      <Typography className={classes.hashTagTitle}>داغ ترین هشتگ ها</Typography>

      <Grid item container direction={"column"} alignItems={"center"}>
        {hashTags.map((item) => (
          <ButtonBase className={classes.hashTagParent}>
            <Link to={"/hashTags/" + item.text} className={classes.hashTagLink}>
              <Grid item container className={"hashTagGrid"}>
                <img src={"/images/hashtag.png"} />
                <Typography className={classes.hashTag}>{item.text}</Typography>
              </Grid>
            </Link>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSidebar;
