import { createSlice } from '@reduxjs/toolkit'


export const UserDataSlice = createSlice({
    name: "userData",

    initialState: {
        todos: [
            {
                _id: "1",
                title: "Add new todo",
                content: "It's a default todo. You do not need to delete or edit it"
            }
        ],
        value: 1,
        isModalOpen: false,
        isEditFormClicked: false,
        isAddFormClicked: false,
        editData: {},
        isSnakOpen: false,
        snakData: "nothing",
        snakState: "success"
    },

    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        setValue: (state) => {
            state.value = state.value + 1;
        },
        setModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setEditFormClicked: (state, action) => {
            state.isEditFormClicked = action.payload;
        },
        setAddFormClicked: (state, action) => {
            state.isAddFormClicked = action.payload;
        },
        setEditData: (state, action) => {
            state.editData = action.payload;
        },
        setSnakOpen: (state, action) => {
            state.isSnakOpen = action.payload;
        },
        setSnakData: (state, action) => {
            state.snakData = action.payload
        },
        setSnakState: (state, action) => {
            state.snakState = action.payload
        }
    }
})

export const { setTodos,
            setValue,
            setModalOpen,
            setEditFormClicked,
            setAddFormClicked,
            setEditData,
            setSnakOpen,
            setSnakData,
            setSnakState,
        } = UserDataSlice.actions;

export default UserDataSlice.reducer;