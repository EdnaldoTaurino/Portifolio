"use client";
import { styled } from "@mui/material/styles";
import { Typography, Button, Container, Box } from "@mui/material";
import Image from "next/image";

// ---------------------------------
const RootContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const ButtonTeste = styled(Button)({
  marginTop: 15,
  border: "none",
  width: "8em",
  height: "3em",
  borderRadius: "3em",
  backgroundColor: "#00ab55",
  transition: "all 450ms ease-in-out",
  textTransform: "none",
  "& .text": {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  "&:hover": {
    background: "linear-gradient(0deg, #266901, #007900)",
    boxShadow:
      "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #000000",
    transform: "translateY(-2px)",
  },
});

// ---------------------------------
const Page404 = () => {
  return (
    <RootContainer>
      <Typography
        variant="body1"
        style={{ marginBottom: "1rem", textAlign: "center" }}
      >
        Página não encontrada!
        <br /> Desculpe, não encontramos a página que você está procurando.
        <br />
        <Box component="span" fontWeight="bold">
          Talvez você tenha digitado errado o URL?
        </Box>
        <br />
        <Box component="span">Certifique-se de verificar sua ortografia.</Box>
      </Typography>
      <divs style={{ display: "flex", flexDirection: "row" }}>
        <Typography
          variant="h1"
          style={{ color: "#E75252", fontWeight: "bold" }}
        >
          404
        </Typography>
        <Image src="/404.png" alt="erro 404" width={120} height={220} />
      </divs>

      <ButtonTeste href="/">
        <p style={{ color: "white", fontWeight: "bold" }}>Voltar</p>
      </ButtonTeste>
    </RootContainer>
  );
};

export default Page404;
