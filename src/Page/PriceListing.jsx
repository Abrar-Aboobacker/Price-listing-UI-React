import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Body/Sidebar";
import Main from "../components/Body/Main";

const PriceListing = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "white",
          height: "140vh",
          width:'98%',
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Sidebar />

        <Main />
      </Box>
     
    </>
  );
};

export default PriceListing;
