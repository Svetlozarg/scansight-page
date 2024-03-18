import { Stack, Typography } from "@mui/material";

import heroImg from "../../../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";

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
        <Stack
          width="100%"
          maxWidth={{ sm: "100%", md: "700px" }}
          gap={4}
          pt="40px"
        >
          <Typography component="p" variant="body1" textAlign="justify">
            <Typography
              component="span"
              variant="h3"
              color={{
                xs: "common.white",
                sm: "common.white",
                md: "primary.main",
              }}
            >
              ScanSight{" "}
            </Typography>
            е софтуер, който предоставя на своите потребители възможността да
            сканира предварително обозначени QR кодове. Тези стикери и табели са
            позиционирани на различни туристически обекти в региона, като всеки
            сканиран QR код носи определен брой точки в акаунта на своя
            потребител.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Целта на приложението е да мотивира туристическата активност в
            региона, като направи преживяването на потребителите интересно и
            забавно.
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Софтуерът е обвързан с Община Петрич и предоставя уникалната
            възможност за печалба на различни награди, които отговарят на
            събраният брой точки от потребителя. За повече информация относно
            точковата система и наградите може да прочетете{" "}
            <Link href="#points-and-prizes">
              <Typography
                component="span"
                variant="body1"
                color={{
                  xs: "common.white",
                  sm: "common.white",
                  md: "primary.main",
                }}
                sx={{
                  borderBottom: "1px solid",
                  borderColor: {
                    xs: "common.white",
                    sm: "common.white",
                    md: "primary.main",
                  },
                }}
              >
                тук
              </Typography>
            </Link>
            .
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            Екипът на ‘ScanSight’ и Община Петрич Ви пожелава успех и приятна
            игра!
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
