import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useState } from 'react';
import { AddToTeamProps } from './types';
import { CreateButton } from './styled';
import { fetchUsers } from 'core/services/user';

const AddToTeam = ({
  handleClose,
  open,
  onAddToTeam,
  team,
}: AddToTeamProps) => {
  const [email, setEmail] = useState('');

  const addHandler = async () => {
    handleClose();
    const users = await fetchUsers();
    const user = users.find((user) => user.email === email);
    onAddToTeam({
      ...team,
      users:
        user && !team.users.some((u) => u.uid === user.uid)
          ? [...team.users, user]
          : [...team.users],
    });
    setEmail('');
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add user to team</DialogTitle>
        <DialogContent>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            margin="dense"
            label="Enter user email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <CreateButton
            variant="contained"
            onClick={addHandler}
            color="primary"
          >
            Add
          </CreateButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddToTeam;
