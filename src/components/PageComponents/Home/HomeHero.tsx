"use client";
import { Stack, Typography } from "@mui/material";
import heroImg from "../../../../public/assets/hero-img.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const HomeHero = () => {
  const { t } = useTranslation();

  return (
    <Stack
      width="100%"
      height={{ sm: "100%", md: "100vh" }}
      justifyContent="center"
      alignItems="center"
      direction={{ sm: "column", md: "row" }}
      pt={{ xs: 10, sm: 10, md: 0 }}
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
            {t("hero.text1")}
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            {t("hero.text2")}
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            {t("hero.text3")}{" "}
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
                {t("hero.here")}
              </Typography>
            </Link>
            .
          </Typography>

          <Typography component="p" variant="body1" textAlign="justify">
            {t("hero.text4")}
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
