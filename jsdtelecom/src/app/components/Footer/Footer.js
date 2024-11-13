import React from "react";
import { Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        padding: "4px 0",
        textAlign: "center",
      }}
    >
      <div id="sobre">
        <p
          variant="body2"
          style={{
            marginTop: 10,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Contato - Fale Conosco: &nbsp;
          <EmailIcon
            style={{ color: "white", marginRight: 5, marginBottom: 2 }}
          />
          <Link
            href="mailto:sac@jsdtelecom.com.br"
            style={{ color: "white", marginRight: 10 }}
          >
            sac@jsdtelecom.com.br
          </Link>
          <Link href="https://wa.me/8330338399" target="_blank" style={{ color: "white" }}>
            (83)3033-8399 &nbsp;
          </Link>
          <WhatsAppIcon
            style={{ color: "white", marginRight: 5, marginBottom: 2 }}
          />
        </p>
        <Typography
          variant="overline"
          style={{ color: "white", textTransform: "none" }}
        >
          &copy; Copyright 2024 All rights reserved - JSD Telecom
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
