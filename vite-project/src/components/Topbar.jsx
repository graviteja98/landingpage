import { Button, Container, Stack } from '@mui/material'
import React from 'react'

function Topbar() {
  return (
    <div>
      <Container color="primary" sx={{padding:"20px",background:"#ddd",display:"flex",justifyContent:"space-around",border:5,borderColor:"primary.main"}}>
            <a>Home</a>
            <a>Products</a>
            <input type="text" placeholder='enter text'/>
            <Button variant="contained" color="secondary">Search</Button>
            <a>Logout</a>
        </Container>
    </div>
  )
}

export default Topbar