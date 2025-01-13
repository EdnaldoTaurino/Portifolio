import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { useState } from "react";

export default function Section() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid
      id="sobre"
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
              Experiências profissionais
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography component="span">
                  <strong> º Desenvolvedor Full Stack</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>Empresa:</strong>
                  Datafort Tecnologia
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
                </Typography>
              </AccordionDetails>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
                flexWrap="wrap"
                marginBottom={2}
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
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography component="span">
                  <strong> º Professor SENAI - PB</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Durante meu tempo no SENAI da Paraíba, atuei como professor de
                  linguagens de programação, lecionando tecnologias como
                  JavaScript, React e React Native. Minha missão era preparar os
                  alunos para o mercado de trabalho, focando em projetos
                  práticos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography component="span">
                  <strong>º Palestrante na Fábrica de software - UNIPÊ</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Tive a oportunidade de ministrar palestras na Fábrica de
                  Software da UNIPÊ, onde pude compartilhar conhecimento e
                  experiências com os alunos, abordando temas como
                  desenvolvimento mobile e mercado de trabalho. Foi uma ótima
                  experiência que me permitiu aprimorar minhas habilidades de
                  comunicação e ensino.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
              Sou um Desenvolvedor FullStack especializado em aplicações Web e
              Mobile. Utilizando tecnologias como React, Next.js, Node.js,
              Express, MongoDB, Prisma, PostgreSQL, NestJs entre outras. Sempre
              em busca de novos desafios e aprendizado contínuo,
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
                { Icon: FaReact, color: "#61DAFB", title: "React" },
                { Icon: SiNextdotjs, color: "#000000", title: "Next.js" },
                { Icon: FaNodeJs, color: "#339933", title: "Node.js" },
                { Icon: SiTypescript, color: "#3178C6", title: "TypeScript" },
                { Icon: SiMongodb, color: "#47A248", title: "MongoDB" },
                { Icon: SiPostgresql, color: "#336791", title: "PostgreSQL" },
                { Icon: SiNestjs, color: "#E0234E", title: "NestJS" },
                { Icon: SiPrisma, color: "#2D3748", title: "Prisma" },
                { Icon: FaHtml5, color: "#E34F26", title: "HTML5" },
                { Icon: FaCss3Alt, color: "#1572B6", title: "CSS3" },
              ].map(({ Icon, color, title }, index) => (
                <Tooltip key={index} title={title}>
                  <Icon
                    size={50}
                    color={color}
                    style={{
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.2)" },
                    }}
                  />
                </Tooltip>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
