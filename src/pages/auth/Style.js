const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
    container: {
        background: '#fff',
        width: '30rem',
        margin: '8rem auto',
        display: 'flex',
        flexDirection: 'column'
    },
    headerText: {
        margin: '1rem',
        alignSelf: 'center'
    },
    tab: {
        flex:1,
        fontFamily: 'shabnam'
    },
    containerInput: {
        padding: '1rem 0.8rem',
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default useStyles