import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
const PlanCard2 = ({
  card,
  heading,
  content,
  ButtonContent,
  backgroundColor,
  users,
  storage,
  emailSupport,
  discription,
  person,
  cloud,
  email,
  tick,
}) => {
  return (
    <>
      <Card elevation={5} sx={{ width: { xs: "95%" }, maxWidth: 560, mb: 4 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  fontSize: 10,
                  backgroundColor: { backgroundColor },
                  borderRadius: 10,
                  px: 1,
                  py: 0.5,
                  width: "25%",
                }}
              >
                {card}
              </Typography>

              <Typography sx={{ mt: 1, fontWeight: 600 }} variant="h5">
                {heading}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>{content}</Typography>
              <Button
                sx={{
                  mt: 2,
                  backgroundColor: { backgroundColor },
                  color: "black",
                  ":hover": { backgroundColor: { backgroundColor } },
                }}
                variant="contained"
              >
                {ButtonContent} <TrendingFlatIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
            <Box sx={{ width: "50%", ml: 2 }}>
              <Typography sx={{ mb: 2 }}>What you'll get:</Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                {person}
                <span style={{ margin: "0 5px" }}></span>
                {users}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                {cloud}
                <span style={{ margin: "0 5px" }}></span>
                {storage}
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                {email}
                <span style={{ margin: "0 5px" }}></span>
                {emailSupport}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "start",
                  fontSize: { xs: 9, sm: 15 },
                }}
              >
                {tick}
                <span style={{ margin: "0 5px" }}></span> {discription}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PlanCard2;
