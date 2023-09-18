import { Box, Typography } from "@mui/material";
import React from "react";
import Plancard from "./Plancard";
import PlanCard2 from "./PlanCard2";
import PersonIcon from "@mui/icons-material/Person";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EmailIcon from "@mui/icons-material/Email";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const Main = () => {
  return (
    <>
      <Box
        sx={{ display:{ xs:'block',sm:"flex"}, justifyContent: "space-between", width: {xs:'100%',sm:"80%"} }}
      >
        <Typography sx={{ mt: {xs:0,sm:-15}, ml: {xs:'12%',sm:30}, fontWeight: 600, fontSize: {xs:15,sm:20},pt:{xs:2,sm:0} }}>
          Choose a plan that's just right for you !
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid grey",
            width: 200,
            height: 30,
            mt: {xs:3,sm:-12},
            mr: {xs:0,sm:-22},
            ml:{xs:'10%',sm:0},
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
          ml: {xs:0,sm:20},
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          mt:{xs:2,sm:0}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 3,
          mt: 3,
          ml:{ xs:0,sm:20},
        }}
      >
        <PlanCard2
          card="Free Forever"
          heading="Free Starter"
          content="The quickest and easiest way to try Protocols with basic
                  functionalities"
          ButtonContent="Get Started"
          backgroundColor="#abf5a2"
          users="Upto 8 Users"
          storage=" Upto 3gb Storage"
          emailSupport="Email Support"
          discription="Basic of Documents,Task Flow
          voting,Accounting,Banking,Notes,
          Investor,Director and Tean Management included"
          person={<PersonIcon />}
          cloud={<CloudUploadIcon />}
          email={<EmailIcon />}
          tick={<DoneAllIcon />}
        />
        <PlanCard2
          card="Let's Connect"
          heading="Enterprise Plan"
          content="Effortlessly customize and fine-tune services as your needs shift,ensuring the perfect tools for success"
          ButtonContent="Contact Us"
          backgroundColor="#a9d3fc"
          users="More than 75 Users"
          discription="Customization of all other features"
          person={<PersonIcon />}
          tick={<DoneAllIcon />}
        />
        
      </Box>
      <Typography sx={{textAlign:'end',color:'#2998f2',mr:2}}>
        *some unique features are provided as add-one with individual plans for each features
      </Typography>
    </>
  );
};

export default Main;
