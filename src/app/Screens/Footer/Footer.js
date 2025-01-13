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
      <div>
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
          Contato: &nbsp;
          <EmailIcon
            style={{ color: "white", marginRight: 5, marginBottom: 2 }}
          />
          <Link
            href="teste@teste.com"
            style={{ color: "white", marginRight: 10 }}
          >
            ednaldo.taurino5@gmail.com
          </Link>
          {/** ou https://wa.me/+5581996629070 */}
          <Link
            href="https://wa.link/b7n15y"
            target="_blank"
            style={{ color: "white" }}
          >
            (81)99662-9070 &nbsp;
          </Link>
          <WhatsAppIcon
            style={{ color: "white", marginRight: 5, marginBottom: 2 }}
          />
        </p>
        <Typography
          variant="overline"
          style={{ color: "white", textTransform: "none" }}
        >
          &copy; Copyright 2025 All rights reserved - Ednaldo Taurino
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
