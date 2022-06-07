import { Divider, Typography } from "@material-ui/core";
import Header from "../../components/header/Header";
import TwitteList from "../home/components/TwitteList";
import useStyles from "../home/Style";
import PersonIcon from '@material-ui/icons/Person';
import { React, useEffect , useState } from "react";
import axios from "axios";
import { getAllTwittes, getTwittesByUser } from "../../api/api_twittes";
import { useLocation } from "react-router";
import { useTweetState } from "../../context/TweetContext";

const TwittesByUser = (props) => {
  const classes = useStyles();

  const location = useLocation();
  const [twittes, setTwittes] = useState([]);

  useEffect(() => {
    getTwittesByUser(props.match.params.id,(isOK,data)=> {
      if(!isOK) 
        alert(data.message);
      else setTwittes(data);
    });
  }, [location]);


  return (
    <div className={classes.root}>
      <Header title={props.match.params.name} icon={<PersonIcon/>} />
      <Divider className={classes.divider} />
      {twittes.length === 0 &&
        <Typography component={"h2"}>کاربر مورد نظر شما توییتی ندارد</Typography>
      }
      <TwitteList data={twittes} />
    </div>
  );
};

export default TwittesByUser;
