const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width: '18%',
        padding: '1.5rem 1rem',
        overflowY: 'auto',
        [theme.breakpoints.down("sm")] : {
            width: '100%'
        }
    },
    logoType: {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginRight: '1rem',
        color: theme.palette.primary.main,
        textDecoration: 'none !important'
    },
    hashTagTitle: {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginRight: '1rem',
        marginTop: '3rem',
        marginBottom: '1.1rem'
    },
    hashTag: {
        marginRight: "0.8rem"
    },
    hashTagParent: {
        marginBottom: "0.5rem",
        padding: "0.15rem",
        width: "100% !important",
        verticalAlign: "middle"
    },
    hashTagLink: {
        width: '100%'
    }
}));

export default useStyles