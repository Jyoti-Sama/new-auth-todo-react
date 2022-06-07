import * as React from 'react';

import Todo from './Todo'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getTodos } from '../../api/api';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, useSelector } from 'react-redux';
import { setAddFormClicked, setModalOpen, setSnakData, setSnakOpen, setSnakState, setTodos } from '../../reducers/apiReducers';
import BasicModal from '../modals/ModalComp';
import CustomizedSnackbars from '../snackBar/SnackBar';



export default function User() {
  const { todos, value } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  console.log(todos)


  const renderTodos = todos.map(todo => {
    return (
      <Grid key={todo._id} item xs={12} md={4} >
        <div className='grid-items'>
          <Todo todo={todo} />
        </div>
      </Grid>
    )
  })

  const handelSnakBarr = (message, state) => {
    dispatch(setSnakOpen(true))
    dispatch(setSnakData(message))
    dispatch(setSnakState(state))
  }

  const handelAddForm = () => {
    dispatch(setModalOpen(true))
    dispatch(setAddFormClicked(true))
  }  


  React.useEffect(() => {
    getTodos()
      .then((data) => {
        dispatch(setTodos(data))
      })
      .catch(err => {
        console.log(err)
        handelSnakBarr("failed to load todos","error")
      })

  }, [value])



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={4} spacing={2}>

        {renderTodos}

        <BasicModal />

        <div className='add-icon'>
          <AddCircleIcon color='secondary' fontSize='large' onClick={() => handelAddForm()} />
        </div>

        <CustomizedSnackbars />

      </Grid>
    </Box>
  );
}
