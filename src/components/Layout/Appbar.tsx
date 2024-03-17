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
            component="p"
            variant="h4"
            fontWeight="normal"
            sx={{
              color: "common.black",
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
              Вход
            </Typography>
            <LoginIcon
              sx={{
                color: "common.black",
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
