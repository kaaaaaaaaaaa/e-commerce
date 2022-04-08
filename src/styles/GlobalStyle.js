import { createTheme } from '@material-ui/core';

const theme = createTheme({

    palette: {
        primary: {
            main: '#3A6771 !important',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgb(248, 249, 250)',
            main: 'rgb(248, 249, 250) !important',
            dark: '#3A6771',
            contrastText: '#3A6771',

        },

        dark: '#ba000d',
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {},
        },

    },
});

export default theme;