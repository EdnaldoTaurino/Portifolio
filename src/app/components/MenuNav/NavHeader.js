"use client";
import React, { useState } from "react";
// Mui
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogContent,
} from "@mui/material";

// Components
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, Home as HomeIcon } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
// React Scroll
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ContactForm from "../form/ContactForm";

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
  const [contactOpen, setContactOpen] = useState(false);

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  // Função para rolar suavemente para a seção 'Sobre'
  const scrollToSobre = () => {
    scroll.scrollTo({
      duration: 2000,
      smooth: "easeInOutQuart",
      offset: -70,
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

              {/**Modal de contato  -------------- */}
              <ScrollLink
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
              >
                <Button color="inherit" onClick={handleContactOpen}>
                  <EmailIcon style={{ color: "gray", marginRight: 4 }} />
                  Contato
                </Button>
              </ScrollLink>
              <Dialog open={contactOpen} onClose={handleContactClose}>
                <DialogContent>
                  <ContactForm />
                </DialogContent>
              </Dialog>

              {/**Modal de contato  -------------- */}
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
