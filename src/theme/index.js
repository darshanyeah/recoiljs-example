import { createTheme } from "@mui/material";

const FONT_FAMILY = [
  "Raleway",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY.join(","),
  },
  palette: {
    mode: "dark",
  },
});

export default theme;
