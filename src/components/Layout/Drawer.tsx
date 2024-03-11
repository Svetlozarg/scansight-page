"use client";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as MUIDrawer,
  IconButton,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES_DATA = [
  {
    id: 1,
    title: "Начало",
    url: "/",
  },
  {
    id: 2,
    title: "Профил",
    url: "/about",
  },
  {
    id: 3,
    title: "ЧЗВ",
    url: "/services",
  },
];

interface DrawerProps {
  scrollPosition: number;
}

const Drawer: React.FC<DrawerProps> = ({ scrollPosition }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {PAGES_DATA.map((page, index) => (
          <ListItem key={page.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{ color: scrollPosition > 150 ? "common.black" : "common.white" }}
        />
      </IconButton>
      <MUIDrawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </MUIDrawer>
    </div>
  );
};

export default Drawer;
