import React from 'react'
import { Typography,Button, Stack } from '@mui/material'

function Landingpage() {
  return (
    <div>
      <Stack direction="column">
      <Typography variant="h1">Landing page</Typography>
      <Stack direction="column">
      <Button variant='contained'>Click Me</Button>
      <Button sx={{p:2}} variant='contained' color="secondary">Exit</Button>
      </Stack>
      </Stack>
      </div>
  );
}

export default Landingpage