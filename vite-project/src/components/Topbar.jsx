import { Typography,Button, Container, Stack } from '@mui/material'
import React from 'react'

function Topbar() {
  return (
    <div>
      <Container color="primary" sx={{padding:"20px",background:"#ddd",display:"flex",justifyContent:"space-around",border:5,borderColor:"primary.main"}}>
            <Typography color="#000" >Home</Typography>
            <Typography color="#000">Products</Typography>
            <input type="text" placeholder='enter text'/>
            <Button variant="contained" color="secondary" >Search</Button>
            <Typography color="#000">Logout</Typography>
        </Container>
    </div>
  )
}

export default Topbar