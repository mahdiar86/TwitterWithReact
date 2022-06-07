import React from "react";
import useStyles from "../home/Style";

const Page404 = () => {
  var classes = useStyles();

  return (
    <div className={classes.page404}>
      <h2>
        صفحه ای که شما به دنبال آن میگردید در سایت ما وجود ندارد و یا حذف شده
        است
      </h2>
      <img src={"../../../images/error.png"} width={"80%"} />
    </div>
  );
};

export default Page404;
