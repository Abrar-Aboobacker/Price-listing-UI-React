import { Box, Typography } from "@mui/material";
import React from "react";
import Plancard from "./Plancard";

const Main = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}
      >
        <Typography sx={{ mt: -15, ml: 30, fontWeight: 600, fontSize: 20 }}>
          Choose a plan that's just right for you !
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid grey",
            width: 200,
            height: 30,
            mt: -12,
            borderRadius: 10,
          }}
        >
          <Box
            sx={{
              background: "#a9d3fc",
              height: 20,
              px: 1,
              py: 0.3,
              mt: 0.3,
              ml: 1,
              borderRadius: 10,
            }}
          >
            <Typography>Monthly</Typography>
          </Box>
          <Typography
            sx={{
              height: 20,
              px: 1,
              py: 0.3,
              mt: 0.3,
              ml: 1,
              borderRadius: 10,
            }}
          >
            Annually
          </Typography>
          <Typography sx={{ fontSize: 10, color: "lightgreen" }}>
            -10%
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          ml: 20,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Plancard
          name="Basic"
          og="$89.99/mo"
          off="$ 9.99/mo"
          backgroundColor="#e8dd87"
          color="#e8dd87"
          users="25"
          storage="25"
          support="Email Support"
        />
        <Plancard
          name="Standard"
          og="$189.99/mo"
          off="$ 99.99/mo"
          backgroundColor="#fa848e"
          color="#fa848e"
          users="50"
          storage="60"
          support="Email+Chat Support"
        />
        <Plancard
          name="Premium"
          og="$389.99/mo"
          off="$ 199.99/mo"
          backgroundColor="#ff9cf5"
          color="#ff9cf5"
          users="75"
          storage="100"
          support="Email+chat+Whatsapp Support"
        />
        
      </Box>
    </>
  );
};

export default Main;
