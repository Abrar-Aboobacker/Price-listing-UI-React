import { Avatar, Box, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import pic from "../../assets/profile.jpg";
import logo from "../../assets/logo.png"
import profile from "../../assets/dp.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Sidebarlist from "../Body/Sidebarlist";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from '@mui/icons-material/Grass';
import ExtensionIcon from '@mui/icons-material/Extension';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const handleCloseDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer anchor="left" open={open} onClose={handleCloseDrawer}>
        <Box
          role="presentation"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
          marginTop={4}
          marginLeft={2}
          gap={333}
          sx={{ width: 200 }}
        >
          <Box
        sx={{
          display:{xs:'block',sm:'none'},
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
            display: {xs:'flex',sm:'none'},
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
         
        </Box>
      </Drawer>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            padding: "30px 0",
            height: "inherit",
            width: "25%",
            background: "white",
            display: {xs:'block',sm:"none"},
            clipPath: {xs:"polygon(0% 0%, 100% 0%, 68% 100%, 0% 100%)",sm:"polygon(0% 0%, 80% 0%, 48% 100%, 0% 100%)"},
            boxShadow: "0px 80px 60px rgba(0, 0, 0, 0.1)",
            cursor:"pointer"
           
          }}
          onClick={() => setOpen(true)}
        >
          <img src={logo} alt="logo" width="50" 
        height="50"   style={{marginRight:25,paddingLeft:10}}/>
        </Box>
        <Box
          sx={{
            padding: "30px 0",
            height: "inherit",
            width: "25%",
            background: "white",
            display: {xs:'none',sm:"block"},
            clipPath: {xs:"polygon(0% 0%, 100% 0%, 68% 100%, 0% 100%)",sm:"polygon(0% 0%, 80% 0%, 48% 100%, 0% 100%)"},
            boxShadow: "0px 80px 60px rgba(0, 0, 0, 0.1)",
            cursor:"pointer"
           
          }}
          onClick={() => setOpen(true)}
        >
          <img src={logo} alt="logo" width="50" 
        height="50"   style={{marginRight:25,paddingLeft:10}}/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center",ml:{xs:5,sm:0} }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: {xs:"150px",sm:"260px"},
              height: "50px",
              background: "white",
              marginRight: 2,
              marginTop: 3,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 1,
            }}
          >
            <Avatar sx={{ ml:{xs:1} }} src={pic} />
            <Typography sx={{ mr: 2, textAlign: "center",fontSize:{xs:10},ml:{xs:0.3} }}>
              XYZ Enterprises Pvt.Ltd
            </Typography>
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "50px",
              background: "white",
              marginTop: 3,
              marginRight: 10,
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
