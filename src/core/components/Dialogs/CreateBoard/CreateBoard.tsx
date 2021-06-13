import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useState } from 'react';
import { CreateButton } from './styled';
import { CreateBoardProps } from './types';
import { format } from 'date-fns';
import { IBoard } from 'core/interfaces/IBoard';

const CreateBoard = ({ handleClose, open, user, onAddBoard }: CreateBoardProps) => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardDescription, setBoardDescription] = useState('');

  const addHandler = () => {
    handleClose();
    const board: IBoard = {
      id: Date.now().toString(),
      creator: user,
      isPrivate: false,
      lanes: [],
      title: boardTitle,
      dateCreate: format(new Date(), 'dd MMM yyyy HH:mm'),
      description: boardDescription,
      comments: [],
      backgroundColor: '#fff',
      users: [user],
      teamBoard: false,
    };
    onAddBoard(board);
    setBoardDescription('');
    setBoardTitle('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create board form</DialogTitle>
      <DialogContent>
        <TextField
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          autoFocus
          margin="dense"
          label="Board title"
          fullWidth
        />
        <TextField
          value={boardDescription}
          onChange={(e) => setBoardDescription(e.target.value)}
          margin="dense"
          label="Board description"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <CreateButton variant="contained" onClick={addHandler} color="primary">
          Create
        </CreateButton>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBoard;
