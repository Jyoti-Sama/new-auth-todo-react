import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import AppBar from './components/AppBar';
import User from './components/user/User';
import Contact from './components/Contact';
import LoginForm from './components/userform/LoginForm';
import RegisterForm from './components/userform/RegisterForm';

import { Provider } from 'react-redux';
import store from "./reducers/Store";
import ProtectedRoutes from './ProtectedRoutes';


export default function App() {
  return (

    <Provider store={store}>
      <Router>

        <AppBar />

        <Routes>
          <Route exact path='/' element={< Home />}></Route>

          <Route
            path="/user"
            element={
              <ProtectedRoutes>
                < User />
              </ProtectedRoutes>
            }
          >
          </Route>

          {/* <Route exact path='/user' element={< User />}></Route> */}
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/login' element={<LoginForm />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/register' element={<RegisterForm />}></Route>
        </Routes>

      </Router>
    </Provider>
  );
}