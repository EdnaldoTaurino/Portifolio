// use client and cache for react
"use client";
import { useState } from "react";
import React from "react";
// Mui
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";

// Components
import Image from "next/image";
import NavDrawer from "../components/MenuNav/NavDrawer";
import DefaultButton from "../components/Buttons/DefaultButton";

const FormPage = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:780px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
  };

  return (
    <>
      {/* import menu */}
      <NavDrawer
        open={open}
        toggleDrawer={toggleDrawer}
        isSmallScreen={isSmallScreen}
      />
      {/* import menu */}
      <div
        style={{
          display: "flex",
          backgroundImage: `url("/backGroundImage.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Grid container alignItems="center" marginRight={35}>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "2rem" }}>
              <form onSubmit={{}}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Nome"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Telefone"
                  variant="outlined"
                  required
                />
                <FormControl
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                >
                  <InputLabel>Assunto</InputLabel>
                  <Select label="Assunto">
                    <MenuItem value="Elogios">Elogios</MenuItem>
                    <MenuItem value="Duvidas">Dúvidas</MenuItem>
                    <MenuItem value="Reclamacao">Reclamação</MenuItem>
                    <MenuItem value="Outros">Outros</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Mensagem"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <DefaultButton buttonText="Enviar" />
                </div>
                {/* <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Enviar
                </Button> */}
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FormPage;
