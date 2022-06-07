const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: 'Shabnam !important'
    },
    leftSidebar: {
        backgroundColor: '#f4f0e6',
        width: '25% !important'
    },
    mainPart: {
        backgroundColor: '#f4f0e6',
        flex: 1
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: "#7EBAFF",
        filter: 'opacity(0.6)'
    },
    content: {
        flex: 1,
        overflowY: "auto",
        background: "#fff"
    },
    waitParent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        background: '#fff',
        opacity: '0.9'
    }
});

export default useStyles