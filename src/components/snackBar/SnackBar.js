import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { setSnakOpen } from '../../reducers/apiReducers';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
    const { isSnakOpen, snakData, snakState } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSnakOpen(true));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnakOpen(false));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={isSnakOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snakState} sx={{ width: '100%' }}>
          {snakData}
        </Alert>
      </Snackbar> 
           
    </Stack>
  );
}


{/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}