import { Stack, Typography } from "@mui/material";

import heroImg from "../../../../public/hero-img.png";
import Image from "next/image";

const HomeHero = () => {
  return (
    <Stack
      width="100%"
      height={{ sm: "100%", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
      direction={{ sm: "column", md: "row" }}
      pt={{ xs: 20, sm: 20, md: 0 }}
      sx={{
        background: {
          xs: "linear-gradient(to bottom right, #B0E1B4, #14AE5C)",
          sm: "linear-gradient(to bottom right, #B0E1B4, #14AE5C)",
          md: "transparent",
        },
      }}
    >
      <Stack
        width="100%"
        maxWidth={{ sm: "100%", md: "45vw" }}
        flex={1}
        gap={2}
        px={2}
      >
        <Stack width="100%" maxWidth={{ sm: "100%", md: "700px" }} gap={2}>
          <Typography component="h1" variant="h1">
            ScanSight
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Сканирайки QR кодове на различни атракции и забележителности,
            ScanSight възнаграждава потребителите с определен брой точки за
            всяко посещение.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Тези точки не само отразяват активността на потребителите, но и ги
            вдъхновяват да продължават да пътуват и да откриват нови места.
            Събирайки достатъчно точки, потребителите могат да ги използват за
            различни награди и сертификати предоставени от Община Петрич.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        height={{ xs: "40vh", sm: "40vh", md: "100vh" }}
        flex={1}
        sx={{
          background: {
            sm: "transparent",
            md: "linear-gradient(to bottom right, #B0E1B4, #14AE5C)",
          },
          mask: "radial-gradient(147.57px at 204px 50%,#000 99%,#0000 101%) 0 calc(50% - 160px)/100% 320px, radial-gradient(147.57px at -124px 50%,#0000 99%,#000 101%) 80px 50%/100% 320px repeat-y",
        }}
      >
        <Image
          src={heroImg}
          alt="img"
          width={200}
          height={200}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
    </Stack>
  );
};

export default HomeHero;
