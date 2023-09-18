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
            boxShadow: "-3px -1px 15px rgba(0, 0, 0, 0.5)",
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
        <Box
        sx={{
            height:  '53vh',
          width: 160,
          background: "white",
          mt: "45px",
          pt:3,
          boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
     <Sidebarlist backgroundColor="#a9d3fc" icon={<DashboardIcon />} name='Dashboard' shadow="4px 4px 9px rgba(0, 0, 0, 0.2)"/>
     <Sidebarlist  icon={<GrassIcon />} name='Perks' border="1px solid #e3e3e3"/>
     <Sidebarlist  icon={<ExtensionIcon />} name='Addons' border="1px solid #e3e3e3"/>
     <Sidebarlist  icon={<QuestionAnswerRoundedIcon />} name='FAQ' border="1px solid #e3e3e3"/>
     <Sidebarlist  icon={<ContactSupportRoundedIcon />} name='Support' border="1px solid #e3e3e3"/>
     <Box sx={{width:'100%',background:'#e3f5fa'}}>
        <Typography sx={{display:'flex',alignItems:'center',textAlign:'center',color:'blue',fontWeight:600,mx:5,mt:5,cursor:'pointer'}}>Logout <PowerSettingsNewIcon sx={{fontSize:18,ml:1}}/></Typography>
     </Box>
      </Box>
      </Box>
      
    </>
  );
};

export default Sidebar;
