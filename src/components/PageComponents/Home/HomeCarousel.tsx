"use client";
import { Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const IMAGES_DATA = [
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(1)-min_eDDWNTLPh.jpg",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/HOR03820-min_azWmI813e.JPG?updatedAt=1708357634737",
  "https://ik.imagekit.io/obelussoft/VisitPetrich/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F/%D0%A5%D0%B5%D1%80%D0%B0%D0%BA%D0%BB%D0%B5%D1%8F%20%D0%A1%D0%B8%D0%BD%D1%82%D0%B8%D0%BA%D0%B0%20(4)-min_5gZlI_why.jpg?updatedAt=1708357634746",
];

const HomeCarousel = () => {
  return (
    <Carousel
      swipeable
      draggable
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
    >
      {IMAGES_DATA.map((image, index) => (
        <Stack
          key={index}
          width="100%"
          height="80vh"
          sx={{
            backgroundImage: `url('${image}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <Stack
            width="100%"
            height="100%"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Typography component="h1" variant="h1" color="common.white">
              ScanSight
            </Typography>

            <Typography component="h2" variant="h3" color="common.white">
              Вашият Пътеводител към Туристическите Чудеса на Петрич!
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
