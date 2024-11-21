import React from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Entre em contato comigo:
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={12} container alignItems="center">
          <WhatsAppIcon style={{ color: "green", marginRight: 8 }} />
          <Typography variant="body1">
            <Link
              href="https://wa.link/b7n15y"
              target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              (81) 99662-9070
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="body1">
            <Link
              href="mailto:ednaldo.taurino5@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              ednaldo.taurino5@gmail.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
