"use client";
import { CircularProgress, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "../../../public/logo-black.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { callApi } from "@/services/callApi";
import {
  postQueryAddPointsToUser,
  postQueryIpdateUserLocation,
} from "@/services/User/apiUserPostQueries";
import { USER_ID } from "@/helpers/helpers";
import { GetQueryUserById } from "@/services/User/apiUserSnippets";
import { getQueryUserById } from "@/services/User/apiUserGetQueries";

const LOCATIONS_DATA = [
  {
    name: "Хераклея Синтика",
    scannedName: "heracleq-sintica",
    url: "https://visitpetrich.vercel.app/tourism/heraclea-sintica",
  },
  {
    name: "Исторически музей",
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
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisited, setIsVisited] = useState<boolean>(false);

  const [scannedLocationData, setScannedLocationData] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    (async () => {
      const scannedLocation = new URLSearchParams(window.location.search).get(
        "location"
      );
      if (!scannedLocation) return window.location.replace("/");
      setScannedLocationData(scannedLocation);
      try {
        if (scannedLocation && USER_ID) {
          if (
            scannedLocation !== "heracleq-sintica" &&
            scannedLocation !== "history-museum" &&
            scannedLocation !== "samuil-fortress" &&
            scannedLocation !== "house-of-vanga"
          ) {
            window.location.replace("/");
          }

          const user = await callApi<GetQueryUserById>({
            query: getQueryUserById(USER_ID),
          });

          if (user.success) {
            const userLocations = user.data.locations;
            const locationData = LOCATIONS_DATA.find(
              (location) => location.scannedName === scannedLocation
            );

            if (locationData) {
              const isLocationScanned = userLocations.find(
                (location) => location.name === locationData.name
              );

              if (!isLocationScanned) return;

              if (!isLocationScanned.visited) {
                await callApi({
                  query: postQueryIpdateUserLocation(USER_ID, {
                    location: isLocationScanned.name as
                      | "Хераклея Синтика"
                      | "Самуилова Крепост"
                      | "Къща Ванга"
                      | "Исторически музей",
                  }),
                });
                await callApi({
                  query: postQueryAddPointsToUser(USER_ID, { points: 5 }),
                });
              } else {
                setIsVisited(true);
              }
            }
          }
        } else {
          window.location.replace("/");
        }
      } catch (err) {
        console.error(err);
      }
    })();
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
      {loading ? (
        !isVisited ? (
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
              Ако имате желание може да прочетете повече за локацията{" "}
              {scannedLocationData === "heracleq-sintica"
                ? "Хераклея Синтика"
                : null}
              {scannedLocationData === "history-museum"
                ? "Исторически Музей"
                : null}
              {scannedLocationData === "samuil-fortress"
                ? "Самуилова Крепост"
                : null}
              {scannedLocationData === "house-of-vanga" ? "Къща Ванга" : null}{" "}
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
        ) : (
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
              color="error"
              textAlign="center"
            >
              Вече сте сканирали този код
            </Typography>

            <Link href="/profile" style={{ textDecoration: "underline" }}>
              <Typography component="p" variant="body1" textAlign="center">
                Вижте вашите точки и посетени локации
              </Typography>
            </Link>
          </Stack>
        )
      ) : (
        <Stack
          width="100%"
          maxWidth="1000px"
          height="550px"
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
          <CircularProgress size="10rem" />
        </Stack>
      )}
    </Stack>
  );
};

export default ScanPage;
