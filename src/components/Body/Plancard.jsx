import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import PersonIcon from "@mui/icons-material/Person";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MailIcon from "@mui/icons-material/Mail";
const Plancard = ({
  name,
  og,
  off,
  backgroundColor,
  color,
  users,
  storage,
  support,
}) => {
  return (
    <>
      <Card elevation={5} sx={{ width: { xs: "95%" }, maxWidth: 360 }}>
        <CardContent>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: 30 }}>
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 14, textDecoration: "line-through" }}
            >
              {og}
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ fontSize: 25, fontWeight: 500, mb: 2 }}
          >
            {off}
          </Typography>
          <Button
            sx={{
              backgroundColor: backgroundColor,
              ":hover": { color: color, background: "white" },
            }}
            variant="contained"
          >
            Get Started <TrendingFlatIcon sx={{ ml: 1 }} />
          </Button>

          <hr />

          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 15 }}>
            What you'Ill get:
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <PersonIcon sx={{ mr: 1 }} /> Upto {users} Users
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <CloudUploadIcon sx={{ mr: 1 }} /> Upto {storage}gb Storage
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <MailIcon sx={{ mr: 1 }} /> {support}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            EXPLORE FEATRURES
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Plancard;
