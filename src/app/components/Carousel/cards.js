import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projetosList from "../projectsList";

export default function SlideCards({ isDarkMode, darkTheme }) {
  const isSmallScreen = useMediaQuery("(max-width:780px)");

  return (
    <Box
      id="Projetos"
      sx={{
        position: "relative",
        px: { xs: 2, md: 6 },
        py: 4,
        overflow: "hidden",
      }}
    >
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, A11y, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isSmallScreen ? "auto" : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="project-swiper"
        style={{
          padding: "50px 0",
        }}
      >
        {projetosList.map((projeto, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={projeto.imageUrl}
                alt={projeto.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  {projeto.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  <span style={{ fontWeight: 600, color: "green" }}>
                    - Tecnologias:
                  </span>
                  {projeto.language}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    mb: 2,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "green" }}>
                    - Descrição:
                  </span>
                  {projeto.description}
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop="auto"
                >
                  <Link href={projeto.url} target="_blank" rel="noopener">
                    <button className="btn">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          isDarkMode
                            ? darkTheme.palette.background.default
                            : "#0092E4"
                        }
                        height="30"
                        width="30"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                      </svg>
                      GitHub
                    </button>
                  </Link>

                  <Link href={projeto.demo} target="_blank" rel="noopener">
                    <button className="button-demo">
                      Demo
                      <svg
                        className="svg-icon-demo"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="30"
                      >
                        <path
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          className="svg-path-demo"
                        />
                      </svg>
                    </button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
