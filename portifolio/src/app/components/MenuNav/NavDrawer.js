import React from "react";

// Mui
import { Drawer, List, ListItem, Button } from "@mui/material";
// Components
import { Link as ScrollLink } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import NavHeader from "./NavHeader";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function NavDrawer({
  open,
  toggleDrawer,
  scrollToTop,
  scrollToSobre,
  isSmallScreen,
}) {
  return (
    <>
      <NavHeader
        open={open}
        toggleDrawer={toggleDrawer}
        scrollToTop={scrollToTop}
        scrollToSobre={scrollToSobre}
        isSmallScreen={isSmallScreen}
      />
      <Drawer anchor="left" open={open} onClose={toggleDrawer} id="Home">
        <List>
          <ListItem>
            <ScrollLink activeClass="active" to="Home" spy={true} smooth={true}>
              <Button color="inherit" onClick={scrollToTop}>
                <HomeIcon style={{ color: "gray", marginRight: 4 }} />
                Home
              </Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
            <ScrollLink
              activeClass="active"
              to="empresa"
              spy={true}
              smooth={true}
            >
              <Button color="inherit" onClick={scrollToTop}>
                Projetos
              </Button>
            </ScrollLink>
          </ListItem>
          <ListItem>
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
          </ListItem>
          <Link href="/form" passHref>
            <Button color="inherit">
              <EmailIcon style={{ color: "gray", marginRight: 4 }} />
              Contato
            </Button>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
