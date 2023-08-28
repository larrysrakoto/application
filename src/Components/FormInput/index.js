import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const index = (props) => {
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30vw' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField onChange={props.onChange} name="nom" label={props.label}  variant="standard" />
        
    </Box>
    </div>
  );
};

export default index;