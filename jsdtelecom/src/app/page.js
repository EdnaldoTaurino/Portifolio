// use client and cache for react
"use client";
import { unstable_noStore as noStore } from "next/cache"; // reset cache NextJs to build project change in dynamic page.
// css
import "./globals.css";
// Mui
import Link from "next/link";
import { useState } from "react";
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
  const isSmallScreen = useMediaQuery("(max-width:780px)");
  const isSmallImageBody = useMediaQuery("(max-width:1080px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

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
          backgroundImage: `url("/backGroundImage.jpg")`,
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
        <ThemeProvider theme={themeFont}>
          <Typography
            variant="h5"
            align="center"
            style={{ gap: 2, color: "white", fontWeight: "bold" }}
          >
            Empresa
            <br />
            <span style={{ fontSize: 45 }}>
              EXPERIÊNCIA EM CALL CENTER SANEAMENTO
            </span>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginBottom: 20, color: "white", fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            veritatis dicta optio quia autem sunt praesentium dolor non aliquid
            repellat error, unde dolores ratione fuga nam laborum, voluptatum
            sequi odit. <br /> Potencialize a satisfação dos seus clientes com
            nossos serviços personalizados.
          </Typography>
        </ThemeProvider>
      </header>

      {/* Main Content */}
      <main id="empresa">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={12} md={6}>
            {!isSmallImageBody && (
              <div style={{ display: "flex", marginLeft: 20 }}>
                <Image
                  src="/body.jpg"
                  width={800}
                  height={550}
                  style={{ marginTop: 120, marginLeft: 160 }}
                  alt="Atendente call center"
                />
              </div>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Grid md={8}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body1"
                    style={{ color: "#024B12", paddingBottom: 12 }}
                  >
                    <span
                      variant="subtitle1"
                      style={{
                        fontSize: 20,
                        color: "#115016",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint, repellat aliquid fuga nulla tempore reiciendis
                      ullam. Sit hic pariatur, fuga dolorum ex quod illum magni
                      cumque sunt quisquam molestias est. Especialistas em Call
                      Center para empresas de água em todo o Brasil!
                    </span>
                    <br />
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum voluptatibus repellat fugit autem esse illum ex nemo
                    modi placeat dolores, asperiores perspiciatis necessitatibus
                    corrupti, tempora architecto rerum similique blanditiis
                    repellendus.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Atendimento ao Cliente */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          style={{ marginTop: 30, marginBottom: 80 }}
          id="servico"
        >
          {/* Atendimento ao Cliente */}
          <Grid item xs={12} sm={6} md={4} lg={3.2}>
            <Card>
              <CardMedia
                component="img"
                image="/atendimento.jpg"
                alt="Atendimento ao cliente"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  Atendimento ao Cliente
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginTop: 10, color: "black" }}
                >
                  Nosso Atendimento ao Cliente personalizado garante a
                  satisfação e fidelização dos seus clientes
                </Typography>
                <div align="center" style={{ marginTop: 10 }}>
                  <Link href="/form" passHref>
                    <DefaultButton buttonText="Fale Conosco" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Telemarketing */}
          <Grid item xs={12} sm={6} md={4} lg={3.2}>
            <Card>
              <CardMedia
                component="img"
                image="/telemarketing.jpg"
                alt="Telemarketing"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  Telemarketing
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginTop: 10, color: "black" }}
                >
                  Nosso serviço de Telemarketing personalizado garante uma
                  comunicação eficaz e direcionada
                </Typography>
                <div align="center" style={{ marginTop: 10 }}>
                  <Link href="/form" passHref>
                    <DefaultButton buttonText="Fale Conosco" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Suporte Técnico */}
          <Grid item xs={12} sm={6} md={4} lg={3.2}>
            <Card>
              <CardMedia
                component="img"
                image="/suporte.jpg"
                alt="Suporte Técnico"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  Suporte Técnico
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginTop: 10, color: "black" }}
                >
                  Nosso Suporte Técnico especializado garante soluções rápidas e
                  eficientes para as demandas das empresas
                </Typography>

                <div align="center" style={{ marginTop: 10 }}>
                  <Link href="/form" passHref>
                    <DefaultButton buttonText="Fale Conosco" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
