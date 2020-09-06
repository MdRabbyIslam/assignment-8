import { createMuiTheme } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { blue, yellow, purple, orange } from '@material-ui/core/colors';
// import yellow from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            orange: orange,
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',

        },
    },
    typography: {
        h1: {
            fontSize: 50,
            color: "green",
            lineHeight: "2em",
            marginBottom: "15px"
        },
        h3: {
            fontSize: "30px"
        },
        h4: {
            color: "green"
        },
        h6: {
            fontSize: "15px",
            color: "purple",
            marginBottom: "15px",
            lineHeight: "2em",
            textAlign: "left",
            marginLeft: "20px"
        },
        h5: {
            color: "black",
            fontWeight: "bold",
            marginBottom: "10px",
            // textDecoration: "underline",
        },
        p: {
            color: "rgba(0,0,0,.1)"
        }


    }
});

export default theme;