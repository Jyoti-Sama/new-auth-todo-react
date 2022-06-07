import * as React from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../api/api.js';
import { setEditData, setEditFormClicked, setModalOpen, setSnakData, setSnakOpen, setSnakState, setValue } from '../../reducers/apiReducers.js';

export default function Todo({ todo }) {
    const dispatch = useDispatch();

    const handelSnakBarr = (message, state) => {
        dispatch(setSnakOpen(true))
        dispatch(setSnakData(message))
        dispatch(setSnakState(state))
      }

    const handelDelete = (_id) => {
        deleteTodo(_id)
            .then((res) => {
                console.log(res)
                dispatch(setValue())
                handelSnakBarr("Delete successful","warning")
            })
            .catch(err => {
                console.log(err)
                handelSnakBarr("failed to delete","error")
            });
    }

    const handelEdit = (todo) => {
        dispatch(setModalOpen(true));
        dispatch(setEditFormClicked(true))
        dispatch(setEditData(todo))
    }
    return (
        <Card sx={{ maxWidth: 300 }}>

            <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                    {todo.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {todo.content}
                </Typography>
            </CardContent>

            <CardActions style={{ display: "flex", justifyContent: "space-around", alignItems: "center", margin: "10px 0" }}>
                <Button variant="contained" color="success" onClick={() => handelEdit(todo)}>
                    Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => handelDelete(todo._id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}
