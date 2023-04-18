import React from 'react'
import { Typography,Button, Stack } from '@mui/material'
import Topbar from './Topbar';

function Landingpage() {
  return (
    <div>
      <Topbar/>
      <Stack direction="column">
      <Typography variant="h1">Landing page</Typography>
      <Stack direction="row">
      <Button variant='contained'>Click Me</Button>
      <Button sx={{p:2}} variant='outlined'>Exit</Button>
      </Stack>
      </Stack>
      </div>
  );
}

export default Landingpage