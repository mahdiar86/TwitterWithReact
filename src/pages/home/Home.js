import { Divider } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import NewTwitte from "./components/NewTwitte";
import TwitteList from "./components/TwitteList";
import useStyles from "./Style";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { getAllTwittes } from "../../api/api_twittes";
import {toast} from 'react-toastify';

const Home = () => {
  const classes = useStyles();

  const [twittes, setTwittes] = useState([]);

  useEffect(() => {
    updateTwittes();
  }, []);

  const updateTwittes=()=> {
    getAllTwittes((isOk, data) => {
      if (!isOk) return toast.error("دریافت لیست توییت ها ناموفق بود");

      setTwittes(data);
    });
  }

  return (
    <div className={classes.root}>
      <Header title={"خانه"} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTwitte updateTwittes={updateTwittes}/>
      <TwitteList data={twittes} />
    </div>
  );
};

export default Home;
