import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/new_logo.png";

const Navbar = () => (
  <Stack direction="row"  justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px" >

    <Link to="/">
      <img
        src={Logo}        alt="logo"
        style={{ width: "100px", 
        height: "60px", 
        margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="50px"
      fontSize="30px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
        
      </Link>
      <a href="#exercises" 
      style={{ textDecoration: "none", 
      color: "#fff" }}>
      Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
