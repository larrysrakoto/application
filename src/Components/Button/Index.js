import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Index = (props) => {
  return (
    <Stack direction="row" spacing={2}>
      
      <Button onClick={props.onClick} variant="contained" endIcon={<SendIcon />}>
      {props.children}
      </Button>
    </Stack>
  );
}

export default Index;