import { Box, Typography } from "@mui/material";
import React from "react";
import Icon from "@mui/material/Icon"; // Import Icon from Material-UI

const Sidebarlist = ({ backgroundColor, icon, name,shadow,border }) => {
  return (
    <>
      <Box
        sx={{
          border: border,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          width: 140,
          backgroundColor: backgroundColor || 'white',
          py: 1,
          mb: 1.8,
          boxShadow: shadow,
          cursor:'pointer'
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            ml:2,
            
          }}
        >
          <Icon >{ icon}</Icon> 
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default Sidebarlist;

