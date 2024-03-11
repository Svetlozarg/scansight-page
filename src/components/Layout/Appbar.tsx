"use client";
import { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { USERNAME } from "@/helpers/helpers";
import Link from "next/link";
import { signOut } from "@/services/Auth/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { usePathname, useRouter } from "next/navigation";
import LoginIcon from "@mui/icons-material/Login";

const Appbar = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userName, setUserName] = useState<string>();
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (USERNAME) {
      setUserName(USERNAME);
    }
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  if (pathname === "/auth/login" || pathname === "/auth/register") return;

  return (
    <Stack
      width="100%"
      minHeight="100px"
      position="fixed"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={2}
      sx={{
        transition: "250ms ease-in-out",
        backgroundColor:
          scrollPosition > 150 || pathname !== "/"
            ? "common.white"
            : "transparent",
        boxShadow:
          scrollPosition > 150 || pathname !== "/"
            ? "0px 1px 5px 0px rgba(0,0,0,0.75)"
            : "none",
        px: "40px",
        zIndex: "9999",
      }}
    >
      <Logo />

      {userName ? (
        <Stack>
          <IconButton onClick={handleClick}>
            <AccountCircleIcon
              sx={{
                fontSize: "3rem",
                color:
                  scrollPosition > 150 || pathname !== "/"
                    ? "common.black"
                    : "common.white",
              }}
            />
          </IconButton>

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
              Профил
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                signOut();
              }}
            >
              <LogoutIcon sx={{ fontSize: "1.5rem", mr: 1 }} />
              Излез
            </MenuItem>
          </Menu>

          <Typography
            sx={{
              color:
                scrollPosition > 150 || pathname !== "/"
                  ? "common.black"
                  : "common.white",
            }}
          >
            {userName}
          </Typography>
        </Stack>
      ) : null}

      {!userName ? (
        <Link href="/auth/login">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{
                color:
                  scrollPosition > 150 || pathname !== "/"
                    ? "common.black"
                    : "common.white",
              }}
            >
              Вход
            </Typography>
            <LoginIcon />
          </Stack>
        </Link>
      ) : null}

      {/* <Drawer scrollPosition={scrollPosition} /> */}
    </Stack>
  );
};

export default Appbar;
