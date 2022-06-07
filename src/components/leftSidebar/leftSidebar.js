import {
  Typography,
  Grid,
  Divider,
  ButtonBase,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./Styles";
import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import axios from "axios";
import { getUsers } from "../../api/api_twittes";
import { useRef } from "react";
import { toast } from "react-toastify";
import { uploadUserPhoto } from "../../api/api_auth";
import {
  setHashTagList,
  useTweetDispatch,
  useTweetState,
} from "../../context/TweetContext";

export const Twitter = ({ name, id, img }) => {
  const classes = useStyles();

  return (
    <ButtonBase style={{ width: "100%" }}>
      <Grid container direction={"row"}>
        <img src={img} className={classes.twitterImage} />
        <Grid
          container
          item
          direction={"column"}
          className={classes.twitterNameParent}
        >
          <Typography className={classes.profileName}>{name}</Typography>
          <Typography className={classes.profileId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const LeftSidebar = () => {
  const classes = useStyles();

  const { hashTags } = useTweetState();
  const tweetDispatch = useTweetDispatch();
  const [anchorMenu, setAnchorMenu] = useState();
  const [users, setUsers] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();

  const inputRef = useRef();

  useEffect(() => {
    getUsers((isOk, data) => {
      if (isOk) {
        setUsers(data);
      }
    });
    }, []);

  const handleToggleMenu = (e) => {
    if (anchorMenu) setAnchorMenu(null);
    else setAnchorMenu(e.currentTarget);
  };

  const getImage = () => {
    if (imagePath) return imagePath;

    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");

    return "/images/user-profiles.png";
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      uploadUserPhoto(formData, (isOk, data) => {
        if (!isOk) return toast.error(data);
        toast.success("تصویر پروفایل شما با موفقیت ویرایش شد !");
        localStorage.setItem("image", data.imagePath);
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"row-reverse"}
        onClick={handleToggleMenu}
        style={{ cursor: "pointer" }}
      >
        <img
          src={getImage()}
          style={{ width: "30%", height: "30%", borderRadius: "50%" }}
          className={classes.profileImage}
        />
        <Grid
          container
          item
          direction={"column"}
          className={classes.profileText}
        >
          <Typography className={classes.profileName}>
            {localStorage.getItem("name")}
          </Typography>
          <Typography className={classes.profileId}>
            {localStorage.getItem("username")}
          </Typography>
        </Grid>
        <input
          ref={inputRef}
          onChange={handleAvatarChange}
          type={"file"}
          style={{ display: "none" }}
        />
      </Grid>

      <Grid item container direction={"column"} className={classes.twitterRoot}>
        <Typography className={classes.twitterTitle}>
          فعالترین کاربران
        </Typography>
        <Divider style={{ marginLeft: -24, marginRight: -24 }} />
        {users.map(item => {
          return (
            <Link
              to={`/users/${item._id}/${item.name}`}
              style={{ width: "100%" }}
            >
              <Divider style={{ marginLeft: -24, marginRight: -24 }} />
              <Twitter
                name={item.name}
                id={item.username}
                img={item.image ? item.image : "/images/person.png"}
              />
            </Link>
          );
        })}
      </Grid>
      <Menu
        open={Boolean(anchorMenu)}
        onClose={() => setAnchorMenu(null)}
        anchorEl={anchorMenu}
      >
        <MenuItem
          onClick={() => {
            inputRef.current.click();
          }}
        >
          ویرایش تصویر پروفایل
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          خروج
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LeftSidebar;
