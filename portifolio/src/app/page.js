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
  Box,
} from "@mui/material";

// components
import NavDrawer from "./components/MenuNav/NavDrawer";
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
              <Card
                sx={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 255, 0, 0.5)",
                  },
                }}
              >
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
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <div style={{ marginTop: 10 }}>
                      <Link href={projeto.url} target="_blank" rel="noopener">
                        <button className="btn">
                          <svg
                            id="github"
                            viewBox="0 0 24 24"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#0092E4"
                            height="30"
                            width="30"
                          >
                            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                          </svg>
                          GitHub
                        </button>
                      </Link>
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <Link href={projeto.demo} target="_blank" rel="noopener">
                        <button type="submit" className="button-demo">
                          Demo
                          <svg
                            className="svg-icon-demo"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                              className="svg-path-demo"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </Box>
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
