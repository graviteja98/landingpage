import React from 'react'
import { Typography,Button, Stack, CircularProgress, Container } from '@mui/material'
import Topbar from './Topbar';

function Landingpage() {
  const clickHandler = ()=>{
  
  }
  return (
   <Container>
      <Topbar/>
      <Stack direction="column">
      <Typography variant="h1">Landing page</Typography>
      <Stack direction="row">
      <Button variant='contained' sx={{p:2,m:2}}>Click Me</Button>
      <Button onClick={clickHandler} sx={{p:2,m:2}} variant='contained' color="secondary">Toggle</Button>
      <CircularProgress sx={{m:2}}/>
      </Stack>
      </Stack>
      </Container>
  );
}

export default Landingpage