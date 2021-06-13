import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { ILink } from 'core/interfaces/ILink';
import { useState } from 'react';
import { CreateButton } from './styled';
import { AddLinkProps } from './types';

const AddLink = ({ open, handleClose, onClickAddLink, team }: AddLinkProps) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addHandle = () => {
    const link: ILink = { id: Date.now().toString(), url, description, name };

    onClickAddLink({ ...team, links: [...team.links, link] });

    handleClose();
    setUrl('');
    setName('');
    setDescription('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add link to team</DialogTitle>
      <DialogContent>
        <TextField
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoFocus
          margin="dense"
          label="Website address"
          fullWidth
        />
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
          label="Name"
          fullWidth
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="dense"
          label="Description"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <CreateButton variant="contained" onClick={addHandle} color="primary">
          Add
        </CreateButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddLink;
