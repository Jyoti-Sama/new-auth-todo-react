import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditForm from '../todoForm/EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { setAddFormClicked, setEditFormClicked, setModalOpen } from '../../reducers/apiReducers'
import AddForm from '../todoForm/AddForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { isModalOpen, isEditFormClicked, isAddFormClicked } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  console.log("edit:",isEditFormClicked,"modal :", isModalOpen)
  console.log("Add:",isAddFormClicked,"modal :", isModalOpen)


  // const handleOpen = () => {
  //   dispatch(setModalOpen(true))
  // };
  const handleClose = () => {
    dispatch(setModalOpen(false))
    dispatch(setEditFormClicked(false))
    dispatch(setAddFormClicked(false))
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TODO
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          { isEditFormClicked ? <EditForm /> : null}
          { isAddFormClicked ? <AddForm /> : null}
        </Box>
      </Modal>
    </div>
  );
}
