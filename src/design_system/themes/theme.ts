import {createTheme} from "@mui/material";
import {
    nav_bg_color,
    primary_color,
    primary_nav_color,
    primary_nav_selected_color, secondary_bg_color,
    secondary_color,
    secondary_nav_color,
    secondary_nav_selected_color
} from "./colors.ts";

const app_theme = createTheme(
    {
        typography: {
            fontFamily: [
                'Montserrat',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif'
            ].join(','),
            h1: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '3rem',
                lineHeight: 1.2,
            },
            h2: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '2.5rem',
                lineHeight: 1.3,
            },
            h3: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '2rem',
                lineHeight: 1.4,
            },
            h4: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '1.75rem',
                lineHeight: 1.4,
            },
            h5: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: '1.5rem',
                lineHeight: 1.5,
            },
            h6: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: '1.25rem',
                lineHeight: 1.6,
            },
            body1: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.5,
            },
            body2: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.57,
            },
            button: {
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                lineHeight: 1.75,
            },
            caption: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: '0.75rem',
                lineHeight: 1.66,
            },
            overline: {
                fontFamily: 'Roboto, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                lineHeight: 2.66,
                textTransform: 'uppercase',
            },
        },
        palette: {
            brand: {
                main: primary_color,
                light: primary_color,
                dark: primary_color,
            },
            nav_bg: {
                main: nav_bg_color,
                light: nav_bg_color,
                dark: nav_bg_color,
            },
            primary_nav_options: {
                main: primary_nav_color,
                light: primary_nav_color,
                dark: primary_nav_color,
            },
            secondary_nav_options: {
                main: secondary_nav_color,
                light: secondary_nav_color,
                dark: secondary_nav_color,
            },
            primary_nav_options_selected: {
                main: primary_nav_selected_color,
                light: primary_nav_selected_color,
                dark: primary_nav_selected_color,
            },
            secondary_nav_options_selected: {
                main: secondary_nav_selected_color,
                light: secondary_nav_selected_color,
                dark: secondary_nav_selected_color,
            },
            primary: {
                main: "#23A6F0",
            },
            secondary: {
                main: secondary_color,
            },
            primary_bg: {
                main: primary_color
            },
            secondary_bg: {
                main: secondary_bg_color
            },
            error: {
                main: '#e74040',
            },
            warning: {
                main: '#e77c40',
            },
            success: {
                main: '#2dc071',
            },
        },
    }
)

export default app_theme
