import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
    palette: {
        background: {
            default: "#0c0d14",
            paper: "#121b21",
        },
        primary: {
            main: "#196ce8",
        },
        secondary: {
            main: "#30363d",
          },
          text: {
            primary: "#c9d1d9",
            secondary: "#8b949e",
          },
    },
});