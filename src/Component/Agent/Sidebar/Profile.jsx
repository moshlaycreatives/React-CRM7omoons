import * as React from "react";
import { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Avatar, Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import RefreshIcon from '@mui/icons-material/Refresh';

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = useState("");
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usertype");
    localStorage.removeItem("name");
    navigate('/');
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ margin: "30px 0px 0px 0px" }}>
        <RefreshIcon sx={{ color: "#2B2B2B", fontSize: "30px" }} />
      </Box>

      <Box display="flex" alignItems="center" padding={2}>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: "1px", borderColor: "#D3D3D3" }} />
      </Box>

      <Box>
        <Typography
          style={{
            fontFamily: "Outfit",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "26px",
            color: "#2B2B2B",
            margin: "20px 20px 15px 5px"
          }}
        >
          {name || "Guest"} {/* Fallback text if name is not found */}
          <Typography
            style={{
              fontFamily: "Outfit",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "26px",
              color: "#2B2B2B",
              margin: "0px 0px 0px 0px"
            }}
          >
            Sales Person
          </Typography>
        </Typography>
      </Box>

      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            alt="Profile"
            src="/image/profile.png"
            sx={{ width: 50, height: 50, margin: "15px 15px 15px 15px" }}
          />
        </Box>
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
