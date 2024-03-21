"use client";
import { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { USER_FIRSTNAME } from "@/helpers/helpers";
import Link from "next/link";
import { signOut } from "@/services/Auth/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname, useRouter } from "next/navigation";
import LoginIcon from "@mui/icons-material/Login";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import flagBG from "../../../public/bg-flag.png";
import flagEN from "../../../public/en-flag.png";
import Image from "next/image";

const lngs = {
  en: { nativeName: "English" },
  bg: { nativeName: "Bulgarian" },
};

const Appbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (USER_FIRSTNAME) {
      setFirstName(USER_FIRSTNAME);
    }
  }, []);

  if (pathname === "/auth/login" || pathname === "/auth/register") return;

  return (
    <Stack
      width="100%"
      height="80px"
      position="absolute"
      top="0"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={1}
      py={1}
      sx={{
        zIndex: "9999",
      }}
    >
      <Logo />

      <Stack direction="row" justifyContent="center" alignItems="center">
        {firstName ? (
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ zIndex: "99999" }}
            >
              <MenuItem
                onClick={() => {
                  router.push("/profile", { scroll: true });
                  handleClose();
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "1.5rem", mr: 1 }} />
                {t("profileText")}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  signOut();
                }}
              >
                <LogoutIcon sx={{ fontSize: "1.5rem", mr: 1 }} />
                {t("signout")}
              </MenuItem>
            </Menu>

            <Typography
              component="p"
              variant="h4"
              fontWeight="normal"
              sx={{
                color: "common.black",
                "@media (max-width: 340px)": {
                  display: "none",
                },
              }}
            >
              {firstName}
            </Typography>

            <IconButton onClick={handleClick}>
              <AccountCircleIcon
                sx={{
                  fontSize: "4rem",
                  color: "common.black",
                }}
              />
            </IconButton>
          </Stack>
        ) : null}

        {!firstName ? (
          <Link href="/auth/login">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}
              border="2px solid"
              borderColor="common.white"
              py={0.5}
              px={1}
              borderRadius="10px"
              bgcolor="common.white"
            >
              <Typography
                component="h4"
                variant="h4"
                sx={{
                  color: "common.black",
                }}
              >
                {t("login")}
              </Typography>
              <LoginIcon
                sx={{
                  color: "common.black",
                }}
              />
            </Stack>
          </Link>
        ) : null}

        <Stack direction="row" gap={1}>
          {Object.keys(lngs).map((lng) => (
            <Typography
              key={lng}
              component="span"
              variant="h4"
              color="common.black"
              sx={{
                cursor: "pointer",
              }}
              onClick={() => {
                i18n.changeLanguage(lng);
              }}
            >
              {lngs[lng as keyof typeof lngs].nativeName === "Bulgarian" ? (
                <Image
                  title="Bulgarian"
                  src={flagBG}
                  alt="Bg Flag"
                  width={100}
                  height={100}
                  style={{ width: "40px", height: "auto" }}
                />
              ) : null}
              {lngs[lng as keyof typeof lngs].nativeName === "English" ? (
                <Image
                  title="English"
                  src={flagEN}
                  alt="En Flag"
                  width={100}
                  height={100}
                  style={{ width: "40px", height: "auto" }}
                />
              ) : null}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Appbar;
