import {CircularProgress, Divider, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import LeftSidebar from "../leftSidebar/leftSidebar";
import RightSidebar from "../rightSidebar/RightSidebar";
import useStyles from "./Styles";
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import Page404 from "../../pages/404/404";
import Home from "../../pages/home/Home";
import {getProfileRequest} from "../../api/api_auth";
import {toast} from "react-toastify";
import {useHistory} from "react-router";
import TwitterDrawer from "../Drawer/TwitterDrawer";

const Layout = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));
    const [wait, setWait] = useState(true);

    useEffect(() => {
        getProfileRequest((isOk, data) => {
            if (!isOk) {
                localStorage.clear();
                history.push("/login");
                return toast.error(data);
            }
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            setWait(false);
        })
    }, []);

    if (wait) {
        return (
            <div className={classes.waitParent}>
                
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <RightSidebar/>
                <Divider orientation={"vertical"} className={classes.divider}/>
                <div className={classes.content}>
                    {props.children}
                </div>
                <Divider orientation={"vertical"} className={classes.divider}/>
                <LeftSidebar/>
            </div>
        );
    }
};

export default Layout;
