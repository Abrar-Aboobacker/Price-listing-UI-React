import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import profile from "../../assets/dp.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from '@mui/icons-material/Grass';
import ExtensionIcon from '@mui/icons-material/Extension';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Sidebarlist from "./Sidebarlist";
const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          height: 160,
          width: 160,
          background: "white",
          mt: "0.5px",
          boxShadow: "-3px -1px 10px rgba(0, 0, 0, 0.4)",
          cursor: "pointer",
          transition: "background-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            boxShadow: "-3px -1px 15px rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <Box sx={{ pt: 2 }}>
          <Avatar sx={{ height: "60px", width: "60px", mx: 5 }} src={profile} />
        </Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            fontWeight: 600,
            ml: 1.65,
            mt: 1,
          }}
        >
          Abrar Aboobacker{" "}
          <KeyboardArrowRightIcon
            sx={{ fontSize: "18px", fontWeight: 600, color: "blue" }}
          />
        </Typography>
        <Typography sx={{ fontSize: "12px", textAlign: "center" }}>
          abrar@gmail.com
        </Typography>
      </Box>
      <Box
        sx={{
            height:  '58.9vh',
          width: 160,
          background: "white",
          mt: "5px",
          pt:1.5,
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
     <Sidebarlist backgroundColor="#a9d3fc" icon={<DashboardIcon />} name='Dashboard'/>
     <Sidebarlist  icon={<GrassIcon />} name='Perks'/>
     <Sidebarlist  icon={<ExtensionIcon />} name='Addons'/>
     <Sidebarlist  icon={<QuestionAnswerRoundedIcon />} name='FAQ'/>
     <Sidebarlist  icon={<ContactSupportRoundedIcon />} name='Support'/>
     <Box sx={{width:'100%',background:'#e3f5fa'}}>
        <Typography sx={{display:'flex',alignItems:'center',textAlign:'center',color:'blue',fontWeight:600,mx:5,mt:9.9,cursor:'pointer'}}>Logout <PowerSettingsNewIcon sx={{fontSize:18,ml:1}}/></Typography>
     </Box>
      </Box>
    </>
  );
};

export default Sidebar;
