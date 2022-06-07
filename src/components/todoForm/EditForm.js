import React from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

import InputSection from './InputSection';
import { editTodo } from '../../api/api';
import { setEditFormClicked, setModalOpen, setSnakData, setSnakOpen, setSnakState, setValue } from '../../reducers/apiReducers';

function EditForm(todo) {
    const { value, editData } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    const handelSnakBarr = (message, state) => {
        dispatch(setSnakOpen(true))
        dispatch(setSnakData(message))
        dispatch(setSnakState(state))
    }


    console.log(editData)

    const submitHandler = (event) => {
        event.preventDefault();

        // * destructure the event element to better understand
        console.log(event.target[0].value) //* its for 1st input field : title
        console.log(event.target[2].value) //* its for 2st input field : content

        const title = event.target[0].value;
        const content = event.target[2].value;

        if (editData._id && title && content) {
            editTodo(editData._id, title, content)
                .then((res) => {
                    console.log(res)
                    dispatch(setValue())
                    dispatch(setModalOpen(false))
                    dispatch(setEditFormClicked(false))
                    handelSnakBarr("successfully Edited", "success")
                })
                .catch(err => {
                    console.log(err)
                    handelSnakBarr("failed to Edit", "error")

                })
        }

    }
    return (
        <div>
            <form onSubmit={(event) => submitHandler(event)}>

                <InputSection
                    props={{ name: "title", data: editData.title }}
                />

                <InputSection
                    props={{ name: "content", data: editData.content }}
                />

                <div>
                    <Button type='submit'>submit</Button>
                </div>
            </form>
        </div>
    )
}

export default EditForm