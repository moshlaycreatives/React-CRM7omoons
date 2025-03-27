import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import * as MuiIcons from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography, TextField } from "@mui/material";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const ProfileData = [
  {
    id: 1,
    image: "",
  },
];

const drawerWidth = 240;

const Nav = ({ menuData }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [isOpen, setIsOpen] = useState(isLargeScreen);
  const [name, setname] = useState();
  const location = useLocation();

  // useEffect(() => {
  //   setIsOpen(isLargeScreen);
  // }, [isLargeScreen]);


  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = (iconName, isActive) => {
    if (iconName.includes("/image/")) {
      const imageStyle = {
        width: "24px",
        height: "24px",
        filter: isActive ? "brightness(0) invert(1)" : "none",
      };
      return <img src={iconName} alt="icon" style={imageStyle} />;
    } else {
      const iconStyle = {
        color: isActive ? "white" : "#737679",
      };
      const Icon = MuiIcons[iconName];
      return Icon ? <Icon style={iconStyle} /> : null;
    }
  };

  const drawer = (
    <div style={{ backgroundColor: "white", height: "700px", width: "329px" }}>
      {ProfileData.map((item, index) => (
        <Box
          key={index}
          style={{
            margin: "50px 0px 18px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/image/Logo.png"
            style={{
              width: "150px",
              height: "100px",


            }}

          />
        </Box>
      ))}

      <List>
        {menuData.map((item, index) => {
          // Check if the current path includes the tab's path, allowing for subpages
          // const isActive = location.pathname.includes(item.path);
          const isActive = location.pathname.startsWith(item.path);
          return (
            <ListItemButton
              key={index}
              component={NavLink}
              to={item.path}
              style={{
                backgroundColor: isActive ? "#0F75BC" : "transparent",
                color: isActive ? "white" : "#737679",
                width: "205px",
                margin: "8px auto",
                borderRadius: "8px",
              }}
            >
              <ListItemIcon
                style={{
                  minWidth: "40px",
                }}
              >
                {renderIcon(item.icon, isActive)}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "21px",
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    lineHeight: "26px",
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: "white",

        }}
        position="fixed"
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                sx={{ mr: 2, }}
              >
                <MenuIcon style={{ color: "rgb(101,106,110)" }} />
              </IconButton>
              {/* <TextField
                sx={{
                  margin: "0px 0px 0px 300px",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {  // Target the input box
                    borderRadius: "222px", // ✅ Adds border-radius
                  },
                }}
                placeholder="Search"
                variant="outlined" // Ensure it's outlined for border visibility
              /> */}
              <TextField
                sx={{
                  margin: { xs: "0px", md: "0px 0px 0px 300px" }, // Responsive margin
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "222px",
                  },
                }}
                placeholder="Search"
                variant="outlined"
              />

            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Profile />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant={isLargeScreen ? "permanent" : "temporary"}
          open={isOpen}
          onClose={toggleDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

Nav.propTypes = {
  menuData: PropTypes.array.isRequired,
};

export default Nav;