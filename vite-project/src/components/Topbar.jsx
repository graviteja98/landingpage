import { Container, Stack } from '@mui/material'
import React from 'react'

function Topbar() {
  return (
    <div>
      <Container color="primary">
        <Stack direction="row">
            <a>Home</a>
            <a>Products</a>
            <input type="text" placeholder='enter text'/>
            <a>Search</a>
            <a>Logout</a>
        </Stack>
        </Container>
    </div>
  )
}

export default Topbar