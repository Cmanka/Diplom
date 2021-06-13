import { IconButton, Tooltip, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { changeTeam, removeTeam } from 'core/actions/team';
import AddToTeam from 'core/components/Dialogs/AddToTeam';
import { ITeam } from 'core/interfaces/ITeam';
import { IUser } from 'core/interfaces/IUser';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDataState } from 'core/selectors/user';
import {
  TopBlock,
  MyButton,
  MyPaper,
  BoldTypography,
  UserBlock,
  MyAvatar,
  LeftBlock,
  MarginTypography,
} from './styled';
import { TeammatesBlockProps } from './types';
import { useHistory } from 'react-router';

const TeammatesBlock = ({ team }: TeammatesBlockProps) => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(selectUserDataState);
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddToTeam = (team: ITeam) => {
    dispatch(changeTeam(team));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickRemoveFromTeam = (user: IUser) => {
    const changedTeam: ITeam = {
      ...team,
      users: [...team.users.filter((u) => u.uid !== user.uid)],
    };

    if (currentUser.uid === user.uid) history.push('/teams');

    dispatch(changeTeam(changedTeam));
  };

  const onClickRemoveTeam = () => {
    history.push('/teams');
    dispatch(removeTeam(team.id));
  };

  return (
    <div>
      <AddToTeam
        open={open}
        handleClose={handleClose}
        onAddToTeam={onAddToTeam}
        team={team}
      />
      {currentUser.uid === team.creator.uid ? (
        <TopBlock>
          <MyButton variant="outlined" onClick={handleClickOpen}>
            Add teammate
          </MyButton>
          <Tooltip title="Remove team">
            <IconButton onClick={onClickRemoveTeam} size="small">
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </TopBlock>
      ) : null}

      <MyPaper>
        <div>
          <BoldTypography variant="h6">Participants</BoldTypography>
          <Typography variant="subtitle2" color="textSecondary">
            {team.users.length} member(s)
          </Typography>
          <hr />
        </div>
        <div>
          {team.users.map((user) => (
            <UserBlock key={user.uid}>
              <LeftBlock>
                <MyAvatar>{user.firstName[0] + user.lastName[0]}</MyAvatar>
                <MarginTypography>
                  {user.firstName} {user.lastName}
                  {currentUser.uid === user.uid ? '(you)' : null}
                </MarginTypography>
              </LeftBlock>

              {(currentUser.uid === team.creator.uid &&
                user.uid !== team.creator.uid) ||
              (currentUser.uid !== team.creator.uid &&
                user.uid === currentUser.uid) ? (
                <IconButton
                  onClick={() => onClickRemoveFromTeam(user)}
                  size="small"
                >
                  <ClearIcon />
                </IconButton>
              ) : null}
            </UserBlock>
          ))}
        </div>
      </MyPaper>
    </div>
  );
};

export default TeammatesBlock;
