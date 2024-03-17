"use client";
import { Breadcrumbs, Skeleton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import ProgressLine from "@/components/SmallComponent/ProgressLine";
import { useEffect, useState } from "react";
import {
  USER_EMAIL,
  USER_FIRSTNAME,
  USER_ID,
  USER_LASTNAME,
  USER_PHONE,
} from "@/helpers/helpers";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { callApi } from "@/services/callApi";
import { getQueryUserPoints } from "@/services/User/apiUserGetQueries";
import { GetQueryUserPointsSnippet } from "@/services/User/apiUserSnippets";
import Link from "next/link";

const ProfilePage = () => {
  const [user, setUser] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    points: 0,
  });
  const totalSights = 4;
  const totalPoints = totalSights * 5;

  useEffect(() => {
    (async () => {
      if (
        USER_ID &&
        USER_FIRSTNAME &&
        USER_LASTNAME &&
        USER_EMAIL &&
        USER_PHONE
      ) {
        const userPoints = await callApi<GetQueryUserPointsSnippet>({
          query: getQueryUserPoints(USER_ID),
        });

        if (userPoints.success) {
          setUser({
            id: USER_ID,
            firstname: USER_FIRSTNAME,
            lastname: USER_LASTNAME,
            email: USER_EMAIL,
            phone: USER_PHONE,
            points: 10,
          });
        }
      }
    })();
  }, []);

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

      <Stack width="100%" maxWidth="1400px" margin="0 auto" mb={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            {"<"} Назад
          </Link>
          <Typography color="inherit">Начало</Typography>
          <Typography color="text.primary">Профил</Typography>
        </Breadcrumbs>
      </Stack>

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
              Посетили сте {user.points / 5}/{totalSights} обекта!
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
          >
            <Typography component="h4" variant="h1" color="common.white">
              {user.points} т.
            </Typography>
          </Stack>
        </Stack>

        <ProgressLine
          value={(user.points / totalPoints) * 100}
          totalPoints={totalPoints}
        />

        <Stack justifyContent="center" alignItems="center" gap={6}>
          <Image
            src="https://ik.imagekit.io/obelussoft/icon_8d34WCUvw.png?updatedAt=1709591203051"
            width={300}
            height={300}
            alt="Start icon"
          />
          <Stack justifyContent="center" alignItems="center" gap={2}>
            <Typography component="p" variant="h3">
              {user.points}/{totalPoints} т. събрани
            </Typography>

            <Typography component="h3" variant="h4">
              Съберете общо {totalPoints} точки, за да вземете вашият
              сертификат!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
