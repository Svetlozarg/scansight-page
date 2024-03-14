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

const Appbar = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (USER_FIRSTNAME) {
      setFirstName(USER_FIRSTNAME);
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
      height="80px"
      position="fixed"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={2}
      sx={{
        borderTop: "10px solid #fff",
        transition: "250ms ease-in-out",
        backgroundColor: "primary.main",
        boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.75)",
        px: "40px",
        zIndex: "9999",
      }}
    >
      <Logo />

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
              color: "common.white",
            }}
          >
            {firstName}
          </Typography>

          <IconButton onClick={handleClick}>
            <AccountCircleIcon
              sx={{
                fontSize: "3rem",
                color: "common.white",
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
            <LoginIcon
              sx={{
                color:
                  scrollPosition > 150 || pathname !== "/"
                    ? "common.black"
                    : "common.white",
              }}
            />
          </Stack>
        </Link>
      ) : null}

      {/* <Drawer scrollPosition={scrollPosition} /> */}
    </Stack>
  );
};

export default Appbar;
