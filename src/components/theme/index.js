import { createTheme } from "@material-ui/core"
import tinycolor from "tinycolor2";

const colorPrimary = "#5ea9dd";

const Theme = createTheme({
    pallete: {
        primary: {
            main: colorPrimary,
            light: tinycolor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'Shabnam !important'
            }
        },
        MuiButton: {
            label: {
                fontFamily: 'shabnam'
            }
        }
    }
});

export default Theme;