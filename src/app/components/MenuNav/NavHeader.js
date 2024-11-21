import React from "react";
// Mui
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Components
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
// React Scroll
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// -------------------------------------------- styles

const colorNavMenu = createTheme({
  palette: {
    primary: {
      main: "rgba(240, 240, 240, 0.5)",
    },
  },
});

// -------------------------------------------- styles

export default function NavHeader({ toggleDrawer, isSmallScreen }) {
  // Função para rolar suavemente para a seção 'Sobre'
  const scrollToSobre = () => {
    scroll.scrollTo({
      duration: 2000, // aumentando a duração para 1 segundo
      smooth: "easeInOutQuart", // tipo de suavização da animação
      offset: -70, // ajuste de offset para corrigir a posição
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop("Home", { smooth: true, duration: 2000, offset: -70 });
  };

  return (
    <ThemeProvider theme={colorNavMenu}>
      <AppBar position="sticky">
        <Toolbar>
          <a href="/">
            <Image src="/favicon.png" alt="Logo" width={50} height={50} />
          </a>
          <div style={{ fontWeight: "bolder", paddingLeft: 10 }}>
            <a href="/">
              <p>Ednaldo Taurino</p>
            </a>
          </div>

          {!isSmallScreen ? (
            <div style={{ marginLeft: "auto", display: "flex" }}>
              <ScrollLink
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
              >
                <Button color="inherit" onClick={scrollToTop}>
                  <HomeIcon style={{ color: "gray", marginRight: 4 }} />
                  Home
                </Button>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="Projetos"
                spy={true}
                smooth={true}
              >
                <Button color="inherit" onClick={scrollToTop}>
                  Projetos
                </Button>
              </ScrollLink>
              
              <ScrollLink
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
              >
                <Button color="inherit" onClick={scrollToSobre}>
                  Sobre
                </Button>
              </ScrollLink>

              <Link href="/form" passHref>
                <Button color="inherit">
                  <EmailIcon style={{ color: "gray", marginRight: 4 }} />
                  Contato
                </Button>
              </Link>
            </div>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
