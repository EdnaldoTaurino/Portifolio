"use client";
import { unstable_noStore as noStore } from "next/cache";
import "../../globals.css";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  ThemeProvider,
  useMediaQuery,
  Box,
  Container,
  Button,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSun,
  FaMoon,
  FaChevronDown,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import Image from "next/image";

//theme Dark Light
import { lightTheme, darkTheme } from "../../components/themeDarkLight/themes";

// components
import NavDrawer from "../../components/MenuNav/NavDrawer";
import Footer from "../Footer/Footer";
import SlideCards from "../../components/Carousel/cards";

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
            background: isDarkMode
              ? darkTheme.palette.background.default
              : "linear-gradient(135deg, #0092E4 0%, #00C6FF 100%)",
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
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            marginTop: "2rem",
            marginBottom: "3rem",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <Card
              elevation={4}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  color="primary"
                >
                  Experiência profissional
                </Typography>
                <Typography variant="body1" paragraph color="textSecondary">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <strong>Desenvolvedor Full Stack</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <strong> Desenvolvedor Full Stack</strong> Empresa: Datafort
                  Tecnologia
                  <br />
                  <strong> Localização: </strong>João Pessoa - PB <br />
                  <strong> Período:</strong> 08/2022 <br />
                  <strong>Responsabilidades:</strong> <br />
                  º Desenvolvimento Full Stack, incluindo a criação de
                  aplicativos web e mobile
                  <br />
                  º Usando as tecnologias mais atuais do mercado como: React,
                  React Native, TypeScript, NodeJs, MongoDb, para oferecer
                  soluções completas e robustas para os clientes.
                  <br />
                  ° Solucionando bugs e implementando novas funcionalidades
                  <br />
                  º Colaboração em projetos utilizando metodologias Scrum,
                  garantindo gerenciamento eficaz
                  <br />
                  º Git e GitLab para gerenciamento de versões do projeto.
                  <br />

                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FaChevronDown />} // Ícone de expansão
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <strong>Professor no SENAI</strong>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Durante meu tempo no SENAI da Paraíba, atuei como
                        professor de linguagens de programação, lecionando
                        tecnologias como JavaScript, React e React Native. Minha
                        missão era preparar os alunos para o mercado de
                        trabalho, focando em projetos práticos.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              elevation={4}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
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
                  Formado em Análise e Desenvolvimento de Sistemas pela UNIPÊ,{" "}
                  <br />
                  Sou um Desenvolvedor FullStack especializado em aplicações web
                  e mobile. Utilizando tecnologias como React, Next.js, Node.js,
                  Express e MongoDB. Sempre em busca de novos desafios e
                  aprendizado contínuo,
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
          </Grid>
        </Grid>

        {/* Projects Section */}
        <Container maxWidth="lg" style={{ marginBottom: "3rem" }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Meus Projetos
          </Typography>

          <SlideCards isDarkMode={isDarkMode} darkTheme={darkTheme} />
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
