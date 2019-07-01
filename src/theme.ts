import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#181A76",
      main: "#181A76"
    },
    secondary: {
      light: "#509BD1",
      main: "#509BD1"
    },
    error: {
      light: "#e2041b",
      main: "#e2041b"
    },
    background: {
      paper: "#FBFBFB",
      default: "#F5F5DC"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  props: {
    MuiTextField: {
      variant: "outlined"
    },
    MuiButton: {
      variant: "contained",
      size: "large"
    }
  }
});

export default theme;

export type TypeTheme = typeof theme;
