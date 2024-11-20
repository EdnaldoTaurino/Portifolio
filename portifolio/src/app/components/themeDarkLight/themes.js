import { createTheme } from "@mui/material";

// Tema claro
const lightTheme = createTheme({
  palette: {
    mode: "light", // Definindo o modo claro
    primary: {
      main: "#0092E4", // Vibrant blue
      light: "#4DABF5",
      dark: "#005CB2",
    },
    background: {
      default: "#F4F6F9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#566573",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      color: "#2C3E50",
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },
});

// Tema escuro
const darkTheme = createTheme({
  palette: {
    mode: "dark", // Definindo o modo escuro
    primary: {
      main: "#0092E4",
      light: "#4DABF5",
      dark: "#005CB2",
    },
    background: {
      default: "#121212", // Fundo escuro
      paper: "#333333", // Cor do fundo do papel no modo escuro
    },
    text: {
      primary: "#E0E0E0", // Texto claro no modo escuro
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 700,
      color: "#E0E0E0",
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
