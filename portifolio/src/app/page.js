// use client and cache for react
"use client";
import { unstable_noStore as noStore } from "next/cache"; // reset cache NextJs to build project change in dynamic page.
// css
import "./globals.css";
// Mui
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

// components
import NavDrawer from "./components/MenuNav/NavDrawer";
import DefaultButton from "./components/Buttons/DefaultButton";
import Footer from "./components/Footer/Footer";
import projetosList from "./components/projectsList/index";
import Image from "next/image";

// -------------------------------------------- styles

const themeFont = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

// -------------------------------------------- styles

export default function App() {
  noStore(); // NextJs
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [repositoriosList, setRepositoriosList] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width:780px)");
  const isSmallImageBody = useMediaQuery("(max-width:1080px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // ! TODO pagina de contato abrir como um modal
  // ? a pagina do github api tem limites de requisições se tiver no limite da erro e nao mostra nada nos cards

  return (
    <div className="App" id="Home">
      {/* Drawer Menu */}
      <NavDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        isSmallScreen={isSmallScreen}
      />
      {/* Drawer Menu */}

      {/* Header */}
      <header
        className="App-header"
        style={{
          backgroundImage: `url("/brackground.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {user && (
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              src={user.avatar_url}
              alt="Avatar"
              width={200}
              height={200}
              className="float-animation"
              style={{
                borderRadius: "50%",
                marginBottom: 20,
              }}
              unoptimized
            />
          </div>
        )}

        <ThemeProvider theme={themeFont}>
          <Typography
            variant="h5"
            align="center"
            style={{ gap: 2, color: "white", fontWeight: "bold" }}
          >
            Olá! sou Ednaldo Taurino | {user?.name}
            <br />
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginBottom: 20, color: "white", fontWeight: "bold" }}
          >
            Sou: {user?.bio}
          </Typography>
        </ThemeProvider>
      </header>

      {/* Main Content */}
      <main id="Projetos">
        {/* Projetos */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          style={{ marginTop: 30, marginBottom: 80 }}
          id="servico"
        >
          {/* Projetos */}
          {projetosList.map((projeto, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3.2} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={projeto.imageUrl}
                  alt={projeto.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {projeto.name}
                  </Typography>
                  <Typography>{projeto.language}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {projeto.description}
                  </Typography>
                  <div align="center" style={{ marginTop: 10 }}>
                    <Link href={projeto.url} target="_blank" rel="noopener">
                      <DefaultButton buttonText="Ver Projeto" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
