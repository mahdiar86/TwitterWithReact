const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width: '18%',
        padding: "1.7rem 1rem",
        alignItems: 'end',
        overflowY: 'auto'

    },
    profileImage: {
        borderRadius: "50%",
        width: "60px"
    },
    profileText: {
        width: "max-content",
        marginLeft: "0.5rem",
        direction: "ltr"
    },
    profileName: {
        flex: 1
    },
    profileId: {
        flex: 1,
        color: theme.palette.text.primary,
        fontSize: "0.85rem"
    },
    twitterRoot: {
        background: "#f5f8fa",
        marginTop: "2.7rem",
        borderRadius: "1.5rem",
        padding: "11px 24px"
    },
    twitterTitle: {
        fontSize: "1.1rem",
        fontWeight: 600,
        marginBottom: '11px'
    },
    twitterNameParent: {
        width: "max-content",
        marginRight: "0.5rem",
        direction: "ltr"
    },
    twitterImage: {
        borderRadius: "50%",
        width: "50px"
    }
}));

export default useStyles