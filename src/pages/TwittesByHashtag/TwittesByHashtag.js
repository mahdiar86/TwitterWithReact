import { Divider } from "@material-ui/core";
import Header from "../../components/header/Header";
import TwitteList from "../home/components/TwitteList";
import useStyles from "../home/Style";
import { React, useEffect } from "react";
import { getTwitteByHashtags } from "../../api/api_twittes";
import { toast } from "react-toastify";
import {setTweetList, useTweetDispatch, useTweetState} from '../../context/TweetContext';
import { useLocation } from "react-router";

const TwittesByHashtag = (props) => {
  const classes = useStyles();

  const location = useLocation();
  const {tweetList} = useTweetState();
  const tweetDispatch = useTweetDispatch();
  //const [twittes, setTwittes] = useState([]);

  useEffect(() => {
    getTwitteByHashtags(props.match.params.hashtag, (isOK, data) => {
      if (!isOK) return toast.error("ناموفق بود");

      setTweetList(tweetDispatch,data);
    });
  }, [location]);

  return (
    <div className={classes.root}>
      <Header
        title={props.match.params.hashtag}
        icon={<img src={"/images/hashtag.png"} />}
      />
      <Divider className={classes.divider} />
      <TwitteList data={tweetList} />
    </div>
  );
};

export default TwittesByHashtag;
