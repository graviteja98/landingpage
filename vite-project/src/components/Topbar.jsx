import { Container, Stack } from '@mui/material'
import React from 'react'

function Topbar() {
  return (
    <div>
      <Container color="primary" sx={{padding:"20px",background:"#ddd",display:"flex",justifyContent:"space-around"}}>
            <a>Home</a>
            <a>Products</a>
            <input type="text" placeholder='enter text'/>
            <a>Search</a>
            <a>Logout</a>
        </Container>
    </div>
  )
}

export default Topbar