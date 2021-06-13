import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { useState } from 'react';
import { CreateTeamProps } from './types';
import { CreateButton } from './styled';
import { format } from 'date-fns';
import { ITeam } from 'core/interfaces/ITeam';

const CreateTeam = ({ handleClose, onAddTeam, open, user }: CreateTeamProps) => {
  const [teamName, setTeamName] = useState('');

  const addHandler = () => {
    handleClose();
    const newTeam: ITeam = {
      id: Date.now().toString(),
      creator: user,
      dateCreate: format(new Date(), 'dd MMM yyyy HH:mm'),
      description: '',
      links: [],
      name: teamName,
      projects: [],
      users: [user],
    };

    onAddTeam(newTeam);
    setTeamName('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create team </DialogTitle>
      <DialogContent>
        <TextField
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          autoFocus
          margin="dense"
          label="Team name"
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

export default CreateTeam;
