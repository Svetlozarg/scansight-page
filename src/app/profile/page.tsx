"use client";
import { useEffect, useState } from "react";
import {
  Breadcrumbs,
  CircularProgress,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import ProgressLine from "@/components/SmallComponent/ProgressLine";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { callApi } from "@/services/callApi";
import { getQueryUserById } from "@/services/User/apiUserGetQueries";
import { GetQueryUserById } from "@/services/User/apiUserSnippets";
import Link from "next/link";
import { USER_ID } from "@/helpers/helpers";
import { LocationType } from "@/services/Auth/authTypes";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@/components/MUIComponents/Button";
import {
  FacebookShareButton,
  ViberShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, ViberIcon, TwitterIcon } from "react-share";
import certificate from "../../../public/scansight-certificate.png";

type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  points: number;
  locations: LocationType[];
};

const ProfilePage = () => {
  const [user, setUser] = useState<UserType>({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    points: 0,
    locations: [],
  });
  const [totalSightseeings, setTotalSightseeings] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (USER_ID) {
        const userData = await callApi<GetQueryUserById>({
          query: getQueryUserById(USER_ID),
        });

        if (userData.success) {
          const user = userData.data;
          setUser({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            points: user.points,
            locations: user.locations,
          });

          setTotalSightseeings(user.locations.length);
          setTotalPoints(user.locations.length * 5);
        }
      } else {
        window.location.href = "/";
      }
    })();
  }, []);

  const handleDownloadCertificate = () => {
    const link = document.createElement("a");
    link.href = certificate.src;
    link.download = "scansight-certificate.png";
    link.click();
  };

  return (
    <Stack pt={20}>
      <Stack justifyContent="center" alignItems="center" gap={4}>
        <Typography component="h2" variant="h2">
          Вашият Профил
        </Typography>

        <AccountCircleIcon sx={{ fontSize: "15rem" }} />

        <Stack
          width="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
          flexWrap="wrap"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <PersonIcon />
            <Typography component="p" variant="body1">
              {user.firstname ? (
                `${user.firstname} ${user.lastname}`
              ) : (
                <Skeleton variant="text" width={150} height={25} />
              )}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <EmailIcon />
            <Typography component="p" variant="body1">
              {user.email ? (
                user.email
              ) : (
                <Skeleton variant="text" width={150} height={25} />
              )}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <LocalPhoneIcon />
            <Typography component="p" variant="body1">
              {user.phone ? (
                user.phone
              ) : (
                <Skeleton variant="text" width={150} height={25} />
              )}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack width="100%" height="20px" bgcolor="primary.main" my={10}></Stack>

      <Stack px={2}>
        <Stack width="100%" maxWidth="1400px" margin="0 auto" mb={2}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              {"<"} Назад
            </Link>
            <Typography color="inherit">Начало</Typography>
            <Typography color="text.primary">Профил</Typography>
          </Breadcrumbs>
        </Stack>

        {user.id ? (
          <Stack
            width="100%"
            maxWidth="1400px"
            margin="0 auto"
            sx={{
              border: "2px solid",
              borderColor: "divider",
              borderRadius: "10px",
              bgcolor: "background.paper",
              p: 5,
              mb: 10,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack gap={2}>
                <Typography component="h3" variant="h2">
                  Посетили сте{" "}
                  {user.locations.filter((location) => location.visited).length}
                  /{totalSightseeings} обекта!
                </Typography>

                <Typography component="p" variant="h4" fontWeight="normal">
                  Вие имате {user.points} събрани точки!
                </Typography>
              </Stack>

              <Stack
                width="200px"
                height="200px"
                bgcolor="primary.main"
                borderRadius="50%"
                justifyContent="center"
                alignItems="center"
                p={5}
                display={{ xs: "none", sm: "none", md: "flex" }}
              >
                <Typography component="h4" variant="h1" color="common.white">
                  {user.points} т.
                </Typography>
              </Stack>
            </Stack>

            <Stack mt={4}>
              <Typography component="h3" variant="h3" mb={2}>
                Вашият прогрес
              </Typography>

              <Stack width="100%" gap={1}>
                {user.locations.map((location) => (
                  <Stack
                    key={location.name}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                  >
                    <Stack direction="row" gap={1} alignItems="center">
                      {location.visited ? (
                        <CheckCircleIcon color="primary" />
                      ) : (
                        <CancelIcon color="error" />
                      )}
                      <Typography component="p" variant="body1">
                        {location.name}
                      </Typography>
                    </Stack>
                    <Typography
                      component="p"
                      variant="body1"
                      color={location.visited ? "primary.main" : "red"}
                      display={{ xs: "none", sm: "block", md: "block" }}
                    >
                      {location.visited ? "Посетен" : "Не е посетен"}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <ProgressLine
              value={(user.points / totalPoints) * 100}
              totalPoints={totalPoints}
            />

            <Stack justifyContent="center" alignItems="center" gap={6}>
              <Image
                src="https://ik.imagekit.io/obelussoft/icon_8d34WCUvw.png"
                width={300}
                height={300}
                alt="Start icon"
              />
              <Stack justifyContent="center" alignItems="center" gap={2}>
                <Typography component="p" variant="h3">
                  {user.points}/{totalPoints} т. събрани
                </Typography>
                {totalPoints === user.points ? (
                  <Stack gap={2} mt={4}>
                    <Typography
                      component="p"
                      variant="body1"
                      textAlign="center"
                    >
                      Поздравления! Вие събрахте общо {totalPoints} точки и може
                      да вземете вашият сертификат!
                    </Typography>

                    <Typography
                      component="p"
                      variant="body1"
                      textAlign="center"
                    >
                      Споделете вашето постижение с приятели!
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      gap={2}
                    >
                      <FacebookShareButton
                        url={"https://scansight.vercel.app"}
                        hashtag={"#scansight"}
                      >
                        <FacebookIcon size={50} round />
                      </FacebookShareButton>

                      <ViberShareButton
                        url={"https://scansight.vercel.app"}
                        title={"Scansight"}
                      >
                        <ViberIcon size={50} round />
                      </ViberShareButton>

                      <TwitterShareButton
                        url={"https://scansight.vercel.app"}
                        title={"Scansight"}
                      >
                        <TwitterIcon size={50} round />
                      </TwitterShareButton>
                    </Stack>

                    <Button
                      message="Изтегли"
                      onClick={handleDownloadCertificate}
                    />
                  </Stack>
                ) : (
                  <Typography component="h3" variant="h4" textAlign="center">
                    Съберете общо {totalPoints} точки, за да вземете вашият
                    сертификат!
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack
            width="100%"
            maxWidth="1400px"
            height="850px"
            margin="0 auto"
            justifyContent="center"
            alignItems="center"
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
    </Stack>
  );
};

export default ProfilePage;
