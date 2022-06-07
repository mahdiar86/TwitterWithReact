import {Grid, IconButton, Typography} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import useStyles from "../Style";
import {Link} from 'react-router-dom';

const Twitte = ({data}) => {
    const renderTwitteText = (text) => {
        if (data.text != undefined) {
            let mainText = data.text.replaceAll("\n", " <br/> ");
            return {
                __html: mainText.replace(
                    /#\S+/g,
                    "<a href='/hashTags/$&' style='color: #080074'>$&</a>"
                ),
            };
        }
    };

    const getImage = () => {
        if (data.user.image) return data.user.image;
        else return "/images/person.png";
    };

    const classes = useStyles();
    return (
        <div className={classes.twitteItem}>
            <Grid container>
                <img src={getImage()} className={classes.twitterImage}/>
                <Grid
                    item
                    container
                    direction={"column"}
                    style={{flex: 1, marginRight: "1rem"}}
                >
                    <Grid item container>
                        <Typography className={classes.twitteItemName}>
                            {data.user.name}
                        </Typography>
                        <Typography className={classes.twitteItemId}>
                            {data.user.id}
                        </Typography>
                    </Grid>
                    <Typography
                        dangerouslySetInnerHTML={renderTwitteText(data.text)}
                        className={classes.twitteText}
                        component={"p"}
                    ></Typography>
                    {data.image && (
                        <div>
                            <div
                                style={{backgroundImage: `url(${data.image})`}}
                                className={classes.twitteImage}
                            ></div>
                        </div>
                    )}
                </Grid>
            </Grid>

            <Grid container direction={"row-reverse"} alignItems={"center"}>
                <IconButton className={classes.newTwitteImgParent}>
                    <FavoriteIcon/>
                </IconButton>
                <Typography className={classes.likeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    );
};

export default Twitte;
