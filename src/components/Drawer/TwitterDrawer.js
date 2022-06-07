import React from 'react';
import {Drawer} from "@material-ui/core";
import RightSidebar from "../rightSidebar/RightSidebar";
import {toggleDrawer, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";

const TwitterDrawer = () => {
    const { drawerOpen } = useLayoutState();
    const layoutDispatch = useLayoutDispatch();

    return (
        <Drawer anchor={"right"} open={!drawerOpen} onClose={() => { toggleDrawer(); }}>
            <RightSidebar/>
        </Drawer>
    );
};

export default TwitterDrawer;