import { Button, Grid, IconButton, InputBase } from "@material-ui/core";
import React from "react";
import useStyles from "../Style";
import classNames from "classnames";
import axios from "axios";
import { newTwitteRequest } from "../../../api/api_twittes";
import { toast } from "react-toastify";
import { updateHashTagList, useTweetDispatch } from "../../../context/TweetContext";

const NewTwitte = ({ updateTwittes }) => {
  const input = React.useRef();
  const inputFile = React.useRef();
  const [imageFile, setImageFile] = React.useState();
  const [imagePath, setImagePath] = React.useState();
  const tweetDispatch = useTweetDispatch();

  // const [twitte, setTwitte] = React.useState();

  React.useEffect(() => {
    input.current.addEventListener(
      "input",
      function (e) {
        //setTwitte(renderTwitteText(e.target.innerText));
        //window.cursorManager.setEndOfContenteditable(e.target);
        console.log(e.target.value);
      },
      false
    );
  }, []);

  const newTwitteClick = () => {
    const twitteText = input.value;
    
    const formData = new FormData();
    formData.append("text", input.current.value);
    if (imageFile) formData.append("image", imageFile);

    newTwitteRequest(formData, (isOk) => {
      if (!isOk) return toast.warn("خطا در ثبت توییت");

      toast.info("توییت شما با موفقیت درج شد");
      updateTwittes();
      
      setImagePath();
      setImageFile();
      input.current.value = "";
      updateHashTagList(tweetDispatch);
    });
  };

  const onChangeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getImage = () => {
    if (
      localStorage.getItem("image") &&
      localStorage.getItem("image") !== "undefined"
    )
      return localStorage.getItem("image");

    return "/images/person.png";
  };

  const selectImage = () => {
    inputFile.current.click();
  };

  const classes = useStyles();

  return (
    <div className={classes.newTwitte}>
      <Grid container>
        <img src={getImage()} className={classes.twitterImage} />
        <textarea
          ref={input}
          rows={"4"}
          className={classNames(classes.input)}
          placeholder={"چی تو ذهنت میگذره ؟"}
        ></textarea>
        <input
          type={"file"}
          onChange={onChangeImage}
          ref={inputFile}
          style={{ display: "none" }}
        />
      </Grid>
      {imagePath && (
        <div>
          <div
            style={{ backgroundImage: `url(${imagePath})` }}
            className={classes.twitteImage}
          ></div>
        </div>
      )}
      <Grid container direction={"row-reverse"}>
        <Button
          variant={"contained"}
          color={"primary"}
          className={classes.twitteButton}
          onClick={newTwitteClick}
        >
          توییت
        </Button>
        <IconButton
          className={classes.newTwitteImgParent}
          onClick={selectImage}
        >
          <img src={"images/tweetpic.png"} className={classes.newTwitteImg} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTwitte;
