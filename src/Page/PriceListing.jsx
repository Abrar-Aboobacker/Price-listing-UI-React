import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Box } from '@mui/material'
import Sidebar from '../components/Body/Sidebar'

const PriceListing = () => {
  return (
    <>
     <Navbar/>
     {/* <Box sx={{display:'flex',justifyContent:'center'}} > */}
        <Sidebar/>
     {/* </Box> */}
    </>
  )
}

export default PriceListing
