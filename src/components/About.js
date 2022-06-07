import React from 'react'

import muiLogo from '../images/mui.png';
import jwtLogo from '../images/jwt.png';
import reduxLogo from '../images/redux.png';
import mongooseLogo from '../images/mongoose.png';
import nodemailerLogo from '../images/nodemailer.png';

import homeImage from '../images/home.PNG';
import loginImage from '../images/login.PNG';
import registerImage from '../images/register.PNG';
import userImage from '../images/user.PNG';
import modalImage from '../images/modal.PNG';
import snackbarImage from '../images/snackbar.PNG';


const primaryColor = "RGB(16, 25, 32)";
const secondaryColor = "RGB(255, 231, 21)";
const tartiaryColor = "RGB(255, 255, 255)";
const quaternaryColor = "RGB(25, 118, 210)";

const homeStyling = {
  container: {
    position: "absolute",
    background: secondaryColor,
    minHeight: "100vh",
    width: "100%"
  },
  colA: {
    color: primaryColor
  },
  colB: {
    color: secondaryColor
  },
  colC: {
    color: tartiaryColor
  },
  colD: {
    color: quaternaryColor
  },
  space: {
    marginTop: "10px"
  },
  spaceTODO: {
    marginTop: "25px",
    fontSize: "75px"
  },
  aboutProject: {
    color: primaryColor,
    margin: "100px 50px"
  },
  logoContainer: {
    display: "flex",
    // justifyContent: "center",
    alignItem: "center",
    margin: "15px 0"
  },
  logoTitle: {
    display: "flex",
    alignItem: "center",
    margin: "0 15px 0 20px"
  },
}

function About() {
  return (
    <div style={homeStyling.container}>
      <div style={homeStyling.aboutProject}>
        <h2>It's a MERN <span style={homeStyling.colC}>( MongoDb Express React Nodejs )</span> Project....</h2>
        <p style={{ margin: "25px 0" }}>
          In this project to build frontend and backend there are some libraries is used with react js and node js.
        </p>

        <div style={homeStyling.logoContainer}>
          <img src={muiLogo} height="30px" alt='mui'/> <span style={homeStyling.logoTitle}>mui</span>  <span style={homeStyling.colC}>styling</span>
        </div>

        <div style={homeStyling.logoContainer}>
          <img src={reduxLogo} height="30px" alt='redux'/> <span style={homeStyling.logoTitle}>Redux toolkit</span>  <span style={homeStyling.colC}>state management</span>
        </div>

        <div style={homeStyling.logoContainer}>
          <img src={mongooseLogo} height="30px" alt='mongoose'/> <span style={homeStyling.logoTitle}>Mongoose</span>  <span style={homeStyling.colC}>ODM for mongoDb</span>
        </div>

        <div style={homeStyling.logoContainer}>
          <img src={nodemailerLogo} height="30px" alt='nodemailer'/> <span style={homeStyling.logoTitle}>Nodemailer</span>  <span style={homeStyling.colC}>email service</span>
        </div>

        <div style={homeStyling.logoContainer}>
          <img src={jwtLogo} height="30px" alt='jwt'/> <span style={homeStyling.logoTitle}>JWT</span>  <span style={homeStyling.colC}>authentication</span>
        </div>

      </div>

      <div style={{ margin: "200px 20px", color: tartiaryColor, background: primaryColor, borderRadius: "10px", padding: "15px" }}>

        <h2>There are total 6 pages</h2>

        <div style={{ margin: "45px 0 20px 0" }}>Home page</div>
        <img src={homeImage} style={{ width: 'calc(100%)' }} alt='home'/>


        <div style={{ margin: "45px 0 20px 0" }}>Login page</div>
        <img src={loginImage} style={{ width: 'calc(100%)' }} alt="login" />

        <div style={{ margin: "45px 0 20px 0" }}>Register page</div>
        <img src={registerImage} style={{ width: 'calc(100%)' }} alt='register' />

        <div style={{ margin: "45px 0 20px 0" }}>User Page </div>
        <img src={userImage} style={{ width: 'calc(100%)' }} alt="user" />

      </div>

      <div style={{ margin: "200px 20px", color: tartiaryColor, background: primaryColor, borderRadius: "10px", padding: "15px" }}>

        <div style={{ margin: "15px 0 20px 0" }}>Modal is used for creating new todo and editing todo</div>
        <img src={modalImage} style={{ width: 'calc(100%)' }} alt="modal" />

        <div style={{ margin: "45px 0 20px 0" }}>Snakbar is used for to show acknowledgement from backend for respective actions taken from frontend.</div>
        <img src={snackbarImage} style={{ width: 'calc(100%)' }} alt="snackbar" />

      </div>

      <div style={{ margin: "200px 30px 100px 30px", color: tartiaryColor, background: primaryColor, borderRadius: "10px", padding: "15px" }}>


        <div style={{ margin: "15px 0 20px 0" }}><h2>How to register?</h2></div>

        <div style={{ margin: "5px 0 10px 0" }}>1. Go to register page.</div>
        <div style={{ margin: "5px 0 10px 0" }}>2. Fill up your details then click register button.</div>
        <div style={{ margin: "5px 0 10px 0" }}>3. And then there will be a email sent to you.</div>
        <div style={{ margin: "5px 0 10px 0" }}>4. Click verify. It will automatically verify and redirect you to the login page.</div>
        <div style={{ margin: "5px 0 10px 0" }}>Hurry! You completed the registration process.</div>

      </div>

      <footer style={{ height: "75px", color: tartiaryColor, background: quaternaryColor, padding: "15px", textAlign: "center", fontSize: "18px" }}>
        If you have any question or suggestion
        please contact with contact form.
      </footer>
    </div>
  )
}

export default About