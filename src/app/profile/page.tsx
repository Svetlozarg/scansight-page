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
import certificateBG from "../../../public/certificate-bg.png";
import certificateEN from "../../../public/certificate-en.png";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

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
  const { t } = useTranslation();
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
    if (i18n.language === "bg") {
      const link = document.createElement("a");
      link.href = certificateBG.src;
      link.download = "certificate-bg.png";
      link.click();
    } else {
      const link = document.createElement("a");
      link.href = certificateEN.src;
      link.download = "certificate-en.png";
      link.click();
    }
  };

  return (
    <Stack pt={20}>
      <Stack justifyContent="center" alignItems="center" gap={4}>
        <Typography component="h2" variant="h2">
          {t("profile.title")}
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
              {t("profile.back")}
            </Link>
            <Typography color="inherit"> {t("profile.home")}</Typography>
            <Typography color="text.primary">{t("profile.profile")}</Typography>
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
                  {t("profile.totalLocationsTitle", {
                    locations: user.locations.filter(
                      (location) => location.visited
                    ).length,
                    totalLocations: totalSightseeings,
                  })}
                </Typography>

                <Typography component="p" variant="h4" fontWeight="normal">
                  {t("profile.pointsCollected", { points: user.points })}
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
                  {user.points} {t("profile.p")}
                </Typography>
              </Stack>
            </Stack>

            <Stack mt={4}>
              <Typography component="h3" variant="h3" mb={2}>
                {t("profile.progress")}
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
                      {location.visited
                        ? t("profile.visited")
                        : t("profile.notVisited")}
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
                  {t("profile.totalPoints", {
                    userPoints: user.points,
                    totalPoints: totalPoints,
                  })}
                </Typography>
                {totalPoints <= user.points ? (
                  <Stack gap={2} mt={4}>
                    <Typography
                      component="p"
                      variant="body1"
                      textAlign="center"
                    >
                      {t("profile.congratulationsText1", {
                        totalPoints: totalPoints,
                      })}
                    </Typography>

                    <Typography
                      component="p"
                      variant="body1"
                      textAlign="center"
                    >
                      {t("profile.congratulationsText2")}{" "}
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
                      message={t("profile.download")}
                      onClick={handleDownloadCertificate}
                    />
                  </Stack>
                ) : (
                  <Typography component="h3" variant="h4" textAlign="center">
                    {t("profile.collectPoints", { totalPoints: totalPoints })}
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
