"use client";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import logo from "../../../public/logo-black.png";
import Image from "next/image";
import { useEffect } from "react";

const LOCATIONS_DATA = [
  {
    name: "Хераклея Синтика",
    scannedName: "heracleq-sintica",
    url: "https://visitpetrich.vercel.app/tourism/heraclea-sintica",
  },
  {
    name: "Исторически Музей",
    scannedName: "history-museum",
    url: "https://visitpetrich.vercel.app/tourism/petrich-museum",
  },
  {
    name: "Самуилова Крепост",
    scannedName: "samuil-fortress",
    url: "https://visitpetrich.vercel.app/tourism/samuil-fortress",
  },
  {
    name: "Къща Ванга",
    scannedName: "house-of-vanga",
    url: "https://visitpetrich.vercel.app/tourism/house-of-vanga",
  },
];

const ScanPage = () => {
  const searchParams = useSearchParams();

  const scannedLocation = searchParams.get("location");

  console.log(scannedLocation);

  useEffect(() => {
    if (scannedLocation) {
      const locationData = LOCATIONS_DATA.find(
        (location) =>
          location.name.toLowerCase().replace(" ", "-") === scannedLocation
      );

      if (locationData) {
        console.log(locationData.url);
      }
    }
  }, []);

  return (
    <Stack
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      px={2}
      mt={10}
    >
      <Stack
        width="100%"
        maxWidth="1000px"
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
        gap={4}
        sx={{
          border: "2px solid",
          borderColor: "divider",
          borderRadius: "10px",
          bgcolor: "background.paper",
          p: 5,
          mb: 10,
        }}
      >
        <Image
          src={logo}
          width={300}
          height={300}
          style={{ width: "300px", height: "auto", objectFit: "cover" }}
          alt="Logo"
        />

        <Typography
          component="h2"
          variant="h2"
          color="primary.main"
          textAlign="center"
        >
          Успешно сканирахте кода
        </Typography>

        <Typography component="p" variant="body1" textAlign="center">
          Локацията беше успешно сканирана от вас и бяха добавени{" "}
          <Typography component="span" variant="h4" color="primary.main">
            5 точки
          </Typography>{" "}
          към вашият профил!
        </Typography>

        <Typography component="p" variant="body1" textAlign="center">
          Ако имате желание може да прочетете повече за локацията
          {scannedLocation === "heracleq-sintica" ? "Хераклея Синтика" : null}
          {scannedLocation === "history-museum" ? "Исторически Музей" : null}
          {scannedLocation === "samuil-fortress" ? "Самуилова Крепост" : null}
          {scannedLocation === "house-of-vanga" ? "Къща Ванга" : null}{" "}
          <Link
            href="https://visitpetrich.vercel.app/tourism/heraclea-sintica"
            style={{ textDecoration: "underline" }}
          >
            тук
          </Link>
        </Typography>

        <Link href="/profile" style={{ textDecoration: "underline" }}>
          <Typography component="p" variant="body1" textAlign="center">
            Вижте вашите точки и посетени локации
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default ScanPage;
