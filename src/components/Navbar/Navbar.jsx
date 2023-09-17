import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import pic from "../../assets/profile.jpg";
const Navbar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            padding: "30px 0",
            height: "inherit",
            width: "25%",
            background: "white",
            display: "block",
            clipPath: "polygon(0% 0%, 80% 0%, 48% 100%, 0% 100%)",
            boxShadow: "0px 80px 60px rgba(0, 0, 0, 0.1)",
          }}
        >
          hi
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "260px",
              height: "50px",
              background: "white",
              marginRight: 2,
              marginTop: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 1,
            }}
          >
            <Avatar sx={{ ml: 2 }} src={pic} />
            <Typography sx={{ mr: 2, textAlign: "center" }}>
              XYZ Enterprises Pvt.Ltd
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "50px",
              background: "white",
              marginTop: 3,
              marginRight: 20,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 1,
              cursor: "pointer",
            }}
          >
            <KeyboardArrowDownIcon sx={{ py: 2, px: 1 }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
