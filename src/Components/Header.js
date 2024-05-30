import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar style={{ background: "white", color: "gray" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              to={"/home"}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <img
                src={
                  "https://images-platform.99static.com/wSdqDUZHZqWKDzprywNdfv28Oq8=/498x33:998x533/fit-in/99designs-contests-attachments/103/103904/attachment_103904573"
                }
                alt="Logo"
                style={{ height: 120 }} // Adjust the height of the logo as needed
              />
            </Link>
          </Typography>
          {navItems.map((item) => (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button key={item.name} sx={{ color: "green" }}>
                <Link
                  to={item.path}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.name}
                </Link>
              </Button>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
