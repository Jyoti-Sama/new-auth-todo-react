import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { loginFunc } from '../../api/authApi';
import CustomizedSnackbars from '../snackBar/SnackBar';
import { useDispatch } from 'react-redux';
import { setSnakData, setSnakOpen, setSnakState } from '../../reducers/apiReducers';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

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

    setEmailError(false)
    setPasswordError(false)



    if (!isValidEmail(email)) { setEmailError(true) } // email validation
    if (password === "") { setPasswordError(true) }
    if (!(password.length >= 5)) { setPasswordError(true) }

    if (isValidEmail(email) && password && (password.length >= 5)) {
      loginFunc(email, password)
        .then((res) => {
          console.log('sucess')
          localStorage.setItem("token", res.token);
          navigate("/user");
        })
        .catch(err => {
          console.log(err.message)
          handelSnakBarr(err.message, "error")
        })
    }
  }
  return (
    <div>
      <form style={{ margin: "150px 60px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={emailError}
          style={{ margin: "0 0 50px 0", maxWidth: "600px" }}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password "
          variant="outlined"
          color='secondary'
          fullWidth
          required
          error={passwordError}
          style={{ margin: "0 0 20px 0", maxWidth: "600px" }}
        />

        <Button
          onClick={() => handelSubmit()}
        >
          Login
        </Button>
      </form>

      <CustomizedSnackbars />
    </div>
  )
}

export default LoginForm