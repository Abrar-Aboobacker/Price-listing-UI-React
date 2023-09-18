import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";
import Sidebar from "../components/Body/Sidebar";
import Main from "../components/Body/Main";

const PriceListing = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "white",
          height: { xs: "350vh", sm: "290vh", md: "153vh", lg: "130vh" },
          width: { xs: "100%", sm: "100%", md: "98%" },
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
