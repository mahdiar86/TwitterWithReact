import React from "react";
import Twitte from "./Twitte";

const TwitteList = ({ data }) => {
  return (
    <div>
      {data.map(twitte => <Twitte data={twitte}/>)}
    </div>
  );
};

export default TwitteList;
