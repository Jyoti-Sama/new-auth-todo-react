import React, { useState } from 'react';
import { TextField } from '@mui/material';

function InputSection({props}) {
  
  return (
    <div>
      <TextField
        name={props.name} 
        defaultValue={props.data}
        label={props.name}
        variant="outlined"
        color='secondary'
        fullWidth
        required
        style={{margin:"10px 0 20px 0"}}
      />
    </div>
  )
}

export default InputSection

