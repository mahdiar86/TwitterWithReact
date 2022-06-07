const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
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
    }
}));

export default useStyles;