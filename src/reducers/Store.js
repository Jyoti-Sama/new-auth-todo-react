import {configureStore} from '@reduxjs/toolkit'

import userData from './apiReducers';


const store = configureStore({
    reducer: {      
      userData: userData,      
    }
  })

export default store;