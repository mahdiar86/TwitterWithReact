const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#e6e6e6'
    },
    header: {
        padding: 24,
        backgroundColor: "#fff",
        display: "flex"
    },
    headerTitle: {
        fontSize: "1.2rem",
        fontWeight: 600,
        marginRight: "0.5rem"
    },
    divider: {
        backgroundColor: "#FEBAF",
        filter: "opacity(0.4)"
    },
    newTwitte: {
        padding: 18,
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column"
    },
    input: {
        marginRight: "1rem",
        border: "none",
        outline: "none",
        fontSize: "16px",
        flex: 1,
        "&:focus": {
            outline: "unset"
        },
        resize: "none"  
    },
    twitteButton: {
        color: "#fff",
        borderRadius: "1rem",
        minHeight: "30px",
        height: "30px",
        fontFamily: "Shabnam",
        lineHeight: "1rem",
        minWidth: "5rem"
    },
    twitterImage: {
        borderRadius: "50%",
        width: "50px",
        height: "50px"
    },
    newTwitteImgParent: {
        padding: '0.2rem',
        marginLeft: '5px',
        border: '0.5px solid #3337',
    },
    newTwitteImg: {
        borderRadius: '50%',
    },
    twitteItem: {
        padding: 18,
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column",
        marginTop: "0.4rem"
    },
    twitteItemName: {
        fontSize: "16px",
        fontWeight: 600
    },
    twitteItemId: {
        fontSize: "0.9rem",
        marginRight: "0.4rem",
        color: theme.palette.text.hint,
        paddingTop: "0.1rem"
    },
    twitteText: {
        fontSize: "0.9rem",
        marginTop: "0.75rem"
    },
    likeCount: {
        fontSize: "0.8rem",
        color: theme.palette.text.hint,
        marginLeft: "0.5rem"
    },
    page404: {
        textAlign:'center',
        padding: '0.5rem',
        margin: '0.5rem',
        fontSize: '0.9rem'
    },
    twitteImage: {
        width: '13rem',
        height: '13rem',
        backgroundSize :'contain',
        marginTop: '0.1rem',
        backgroundRepeat : 'no-repeat',
        borderRadius: '0.4rem'
    }
}));

export default useStyles