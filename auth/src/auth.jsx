import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Auth() {
const [email, setEmail] =useState('');
const [password, setPassword]= useState('')

  return (
    <div>
       <h2>Simple Auth</h2>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </Box>
    </div>
  )
}

export default Auth
