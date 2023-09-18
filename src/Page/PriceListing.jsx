import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Box} from "@mui/material";
import Sidebar from "../components/Body/Sidebar";
import Main from "../components/Body/Main";

const PriceListing = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "white",
          height: {xs:"385vh",sm:"143vh"},
          width:{xs:'145%',sm:'98%'},
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
