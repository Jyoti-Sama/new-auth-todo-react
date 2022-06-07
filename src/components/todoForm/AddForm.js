import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';

import InputSection from './InputSection';
import { addTodo } from '../../api/api';
import { setAddFormClicked, setEditFormClicked, setModalOpen, setSnakData, setSnakOpen, setSnakState, setValue } from '../../reducers/apiReducers';

function AddForm() {
    
    const dispatch = useDispatch();

    const handelSnakBarr = (message, state) => {
        dispatch(setSnakOpen(true))
        dispatch(setSnakData(message))
        dispatch(setSnakState(state))
      }

    
    const submitHandler = (event) => {
        event.preventDefault();

        // * destructure the event element to better understand
        console.log(event.target[0].value) //* its for 1st input field : title
        console.log(event.target[2].value) //* its for 2st input field : content

        const title = event.target[0].value;
        const content = event.target[2].value;

        if ( title && content) {
            addTodo( title, content)
                .then((res) => {
                    console.log(res)
                    dispatch(setValue())
                    dispatch(setModalOpen(false))
                    dispatch(setAddFormClicked(false))
                    handelSnakBarr("Succesfully Added","success")
                })
                .catch(err => {
                    console.log(err)
                    handelSnakBarr("failed to Add","error")
                })
        }

    }
    return (
        <div>
            <form onSubmit={(event) => submitHandler(event)}>

                <InputSection props={{ name: "title", data: "" }} />

                <InputSection props={{ name: "content", data: "" }} />

                <div>
                    <Button type='submit'>submit</Button>
                </div>
            </form>
        </div>
    )
}

export default AddForm