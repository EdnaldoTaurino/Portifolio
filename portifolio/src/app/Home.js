"use client";
import { unstable_noStore as noStore } from "next/cache";
import "./globals.css";
import { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  useMediaQuery,
  Box,
  Container,
  Button,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

//theme Dark Light
import { lightTheme, darkTheme } from "./components/themeDarkLight/themes";

// components
import NavDrawer from "./components/MenuNav/NavDrawer";
import Footer from "./components/Footer/Footer";
import projetosList from "./components/projectsList/index";

export default function Home() {
  noStore();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:780px)");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div
        className="App"
        style={{
          backgroundColor: isDarkMode
            ? darkTheme.palette.background.default
            : lightTheme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        {/* NavDrawer */}
        <NavDrawer
          open={open}
          toggleDrawer={toggleDrawer}
          isSmallScreen={isSmallScreen}
        />

        {/* Header with Gradient */}
        <header
          style={{
            background: "linear-gradient(135deg, #0092E4 0%, #00C6FF 100%)",
            color: "white",
            padding: "4rem 0",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Botão para alternar o tema */}
          <Button
            onClick={toggleTheme}
            variant="contained"
            color="primary"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              zIndex: 1000,
            }}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
          {/* Botão para alternar o tema */}
          <Container maxWidth="md">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Image
                src="https://avatars.githubusercontent.com/ednaldotaurino"
                alt="Avatar"
                width={200}
                height={200}
                style={{
                  borderRadius: "50%",
                  border: "6px solid white",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
                unoptimized
              />

              <Typography variant="h4" color="inherit" gutterBottom>
                Olá! Seja bem vindo(a) eu sou:
              </Typography>

              <Typography variant="h3" color="inherit" fontWeight={700}>
                <Typewriter
                  words={["Ednaldo Taurino", "Desenvolvedor Full Stack"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </Typography>
            </Box>
          </Container>
        </header>

        {/* About Section */}
        <Container
          maxWidth="md"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Card elevation={4}>
            <CardContent>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                color="primary"
              >
                Sobre mim
              </Typography>

              <Typography
                variant="body1"
                paragraph
                align="center"
                color="textSecondary"
              >
                Sou um Desenvolvedor FullStack especializado em aplicações web e
                mobile. Atualmente, foco no desenvolvimento de aplicações web
                utilizando tecnologias como React, Next.js, Node.js, Express e
                MongoDB. Sempre em busca de novos desafios e aprendizado
                contínuo, também atuei como professor de linguagem de
                programação no SENAI da Paraíba.
              </Typography>

              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ marginTop: "2rem", marginBottom: "1.5rem" }}
                color="primary"
              >
                Tecnologias
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
                flexWrap="wrap"
              >
                {[
                  { Icon: FaReact, color: "#61DAFB" },
                  { Icon: SiNextdotjs, color: "#000000" },
                  { Icon: FaNodeJs, color: "#339933" },
                  { Icon: SiTypescript, color: "#3178C6" },
                  { Icon: SiMongodb, color: "#47A248" },
                  { Icon: FaHtml5, color: "#E34F26" },
                  { Icon: FaCss3Alt, color: "#1572B6" },
                ].map(({ Icon, color }, index) => (
                  <Icon
                    key={index}
                    size={50}
                    color={color}
                    style={{
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Container>

        {/* Projects Section */}
        <Container maxWidth="lg" style={{ marginBottom: "3rem" }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Meus Projetos
          </Typography>

          <Grid container spacing={4} justifyContent="center" id="Projetos">
            {projetosList.map((projeto, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={projeto.imageUrl}
                    alt={projeto.name}
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {projeto.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      <span style={{ fontWeight: 600, color: "green" }}>
                        º Tecnologias:
                      </span>{" "}
                      {projeto.language}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <span style={{ fontWeight: 600, color: "green" }}>
                        º Descrição:
                      </span>{" "}
                      {projeto.description}
                    </Typography>

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop={2}
                    >
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

                      <Link href={projeto.demo} target="_blank" rel="noopener">
                        <button className="button-demo">
                          Demo
                          <svg
                            id="demo"
                            className="svg-icon-demo"
                            viewBox="0 0 16 19"
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            width="30"
                          >
                            <path
                              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                              className="svg-path-demo"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
