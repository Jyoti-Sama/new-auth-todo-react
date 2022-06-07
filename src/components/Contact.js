import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import CustomizedSnackbars from './snackBar/SnackBar';
import { useDispatch } from 'react-redux';
import { setSnakData, setSnakOpen, setSnakState } from '../reducers/apiReducers';
import { sendMessage } from '../api/api';

function Contact() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false)


  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)

  const handelSnakBarr = (message, state) => {
    dispatch(setSnakOpen(true))
    dispatch(setSnakData(message))
    dispatch(setSnakState(state))
  }



  const handelSubmit = () => {

    setNameError(false)
    setMessageError(false)

    if (name === "") { setNameError(true) }
    if (message === "") { setNameError(true) }

    // email validation


    if (name && message) {

      sendMessage(name, message)
        .then(data => {
          console.log(data);
          if (data.status == 200) {
            handelSnakBarr("Thank you for messaging me!", "success");
            setName("");
            setMessage("");
          } else {
            handelSnakBarr("faild to sent messsage!", "error");
          }
        })
        .catch(err => {
          console.log(err);
          handelSnakBarr("faild to sent messsage!", "error");
        });
    }


  }
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>For any query or suggestion please contact us.</h2>
      <form style={{ margin: "100px 60px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={nameError}
          style={{ margin: "0 0 50px 0", maxWidth: "600px" }}
        />

        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={messageError}
          style={{ margin: "0 0 50px 0", maxWidth: "600px" }}
        />

        <Button onClick={() => handelSubmit()}>
          Submit
        </Button>
      </form>

      <CustomizedSnackbars />
    </div>
  )
}

export default Contact



// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
