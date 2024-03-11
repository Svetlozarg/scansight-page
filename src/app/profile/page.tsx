"use client";
import { Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import ProgressLine from "@/components/SmallComponent/ProgressLine";
import { useEffect, useState } from "react";
import { USERNAME, USER_EMAIL } from "@/helpers/helpers";
import EmailIcon from "@mui/icons-material/Email";

const ProfilePage = () => {
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (USERNAME && USER_EMAIL) {
      setUserName(USERNAME);
      setEmail(USER_EMAIL);
    }
  }, []);
  return (
    <Stack pt={25}>
      <Stack justifyContent="center" alignItems="center" gap={4}>
        <Typography component="h2" variant="h2">
          Вашият Профил
        </Typography>

        <AccountCircleIcon sx={{ fontSize: "15rem" }} />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <PersonIcon />
          <Typography component="p" variant="body1">
            {userName}
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
            {email}
          </Typography>
        </Stack>
      </Stack>

      <Stack width="100%" height="20px" bgcolor="primary.main" my={10}></Stack>

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
              Посетили сте 2/4 обекта!
            </Typography>

            <Typography component="p" variant="h4" fontWeight="normal">
              Вие имате 10 събрани точки!
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
              10 т.
            </Typography>
          </Stack>
        </Stack>

        <ProgressLine value={50} />

        <Stack justifyContent="center" alignItems="center" gap={6}>
          <Image
            src="https://ik.imagekit.io/obelussoft/icon_8d34WCUvw.png?updatedAt=1709591203051"
            width={300}
            height={300}
            alt="Start icon"
          />
          <Stack justifyContent="center" alignItems="center" gap={2}>
            <Typography component="p" variant="h3">
              10/20 т. събрани
            </Typography>

            <Typography component="h3" variant="h4">
              Съберете общо 20 точки, за да вземете вашият сертификат!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
