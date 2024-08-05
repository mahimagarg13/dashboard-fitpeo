import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import {
  Search,
  Notifications,
  Settings,
  Grid4x4,
  Grid4x4TwoTone,
  Message,
  Email,
  Home,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, ListAlt, BarChart } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const styles = {
    iconsContainer: {
      display: "flex",
      "@media (max-width: 768px)": {
        display: "none",
      },
    },
    arrowIcon: {
      display: "none",
      "@media (max-width: 768px)": {
        display: "block",
      },
    },
    menuContainer: {
      display: "none",
      "@media (max-width: 768px)": {
        display: "block",
      },
    },
  };

  return (
    <>
      <AppBar position="sticky" style={{ background: "#1c1c1e" }}>
        <Toolbar>
          <div style={{ display: "flex" }}>
            <IconButton color="inherit">
              <Dashboard />{" "}
            </IconButton>

            <Paper
              component="form"
              sx={{ display: "flex", marginLeft: "20px" }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "white" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </div>
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
          >
            <Box sx={styles.iconsContainer}>
              <IconButton color="inherit">
                <Email />
              </IconButton>
              <IconButton color="inherit">
                <Settings />
              </IconButton>
              <IconButton color="inherit">
                <Notifications />
              </IconButton>
            </Box>
            <Box sx={styles.arrowIcon}>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <ArrowDropDown />
              </IconButton>
            </Box>
            <Avatar src="/path/to/avatar.jpg" alt="Profile Picture" />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={styles.menuContainer}
            >
              <MenuItem onClick={handleMenuClose}>
                <Email />
                Email
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Settings />
                Settings
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Notifications />
                Notifications
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
