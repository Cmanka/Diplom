import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { CreateProjectProps } from './types';
import { CreateButton } from './styled';
import { format } from 'date-fns';

const CreateProject = ({
  open,
  handleClose,
  onAddProject,
  user,
}: CreateProjectProps) => {
  const [name, setName] = useState('');

  const addHandle = () => {
    handleClose();
    onAddProject({
      boards: [],
      creator: user,
      users: [user],
      dateCreate: format(new Date(), 'dd MMM yyyy HH:mm'),
      id: Date.now().toString(),
      name,
      teams: [],
    });
    setName('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create project</DialogTitle>
      <DialogContent>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          margin="dense"
          label="Project name"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <CreateButton variant="contained" onClick={addHandle} color="primary">
          Create
        </CreateButton>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProject;
