import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { registerFunc } from '../../api/authApi';
import CustomizedSnackbars from '../snackBar/SnackBar';
import { useDispatch } from 'react-redux';
import { setSnakData, setSnakOpen, setSnakState } from '../../reducers/apiReducers';
import { useNavigate } from 'react-router-dom';

const SERVER_URL = 'https://todoguddu.herokuapp.com';
function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false)

  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [rePassword, setRePassword] = useState('')
  const [rePasswordError, setRePasswordError] = useState(false)

  const handelSnakBarr = (message, state) => {
    dispatch(setSnakOpen(true))
    dispatch(setSnakData(message))
    dispatch(setSnakState(state))
  }

  const isValidEmail = value =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    );

  const handelSubmit = () => {

    setFirstNameError(false)
    setLastNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setRePasswordError(false)
    
    if(firstName === "") { setFirstNameError(true) }
    if(lastName === "") { setLastNameError(true) }
    if (!isValidEmail(email)) { setEmailError(true) } // email validation
    if(password === "") { setPasswordError(true) }
    if(!(password.length >= 5)) { setPasswordError(true) }
    if(rePassword === "") { setRePasswordError(true)}
    if(!(password === rePassword)) { setRePasswordError(true) }
    
    if( firstName && lastName && isValidEmail(email) && password && (password.length >= 5) && rePassword && password === rePassword ){      
      registerFunc(firstName,lastName,email,password)
      .then((res)=>{
        console.log('sucess')
        // localStorage.setItem("token", res.token);
        // navigate();
        window.location.replace(`${SERVER_URL}/needVerification`);
      })
      .catch(err=> {
        console.log(err.message)
        handelSnakBarr(err.message,"error")
      })
    }
  }
  return (
    <div>
      <form style={{ margin: "50px 60px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TextField
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}
          label="First Name"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={firstNameError}
          style={{ margin: "0 0 30px 0", maxWidth: "600px" }}
        />
        <TextField
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          label="Last Name"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={lastNameError}
          style={{ margin: "0 0 30px 0", maxWidth: "600px" }}
        />
        <TextField
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={emailError}
          style={{ margin: "0 0 30px 0", maxWidth: "600px" }}
        />
        <TextField
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          label="password "
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={passwordError}
          style={{ margin: "0 0 30px 0", maxWidth: "600px" }}
        />
        <TextField
          value={rePassword}
          onChange={(e)=> setRePassword(e.target.value)}
          label="re-enter-password "
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={rePasswordError}
          style={{ margin: "0 0 30px 0", maxWidth: "600px" }}
        />

        <Button onClick={() => handelSubmit()}>
          Register
        </Button>
      </form>

      <CustomizedSnackbars />
    </div>
  )
}

export default RegisterForm