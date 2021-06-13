import { Box, IconButton, TextField, Typography } from '@material-ui/core';
import { InputTeamNameBlock } from 'pages/Team/components/InputsBlock/styled';
import { ChangeEvent, useState } from 'react';
import { LeftContentProps } from './types';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import {
  UserBlock,
  LeftBlock,
  MyAvatar,
  MarginTypography,
  MyPaper,
} from './styled';
import { useDispatch } from 'react-redux';
import { changeProject } from 'core/actions/project';

const LeftContent = ({ project, currentUser }: LeftContentProps) => {
  const [projName, setProjName] = useState(project.name);
  const [focusedProjName, setFocusedProjName] = useState(false);
  const dispatch = useDispatch();

  const handleProjName = (e: ChangeEvent<HTMLInputElement>) => {
    setProjName(e.target.value);
  };

  const onClickDoneProjName = () => {
    setFocusedProjName(false);
    dispatch(changeProject({ ...project, name: projName }));
  };

  const onClickClearProjName = () => {
    setFocusedProjName(false);
    setProjName(project.name);
  };

  return (
    <Box>
      <InputTeamNameBlock>
        <TextField
          value={projName}
          onChange={handleProjName}
          id="outlined-secondary"
          label="Project name"
          variant="outlined"
          size="small"
          color="primary"
          disabled={project.creator.uid !== currentUser.uid}
          onFocus={() => setFocusedProjName(true)}
          focused={focusedProjName}
          style={{ width: '100%' }}
          InputProps={{
            style: { fontSize: '20px' },
          }}
        />
        {focusedProjName ? (
          <>
            <IconButton onClick={onClickDoneProjName} size="small">
              <DoneIcon />
            </IconButton>
            <IconButton onClick={onClickClearProjName} size="small">
              <ClearIcon />
            </IconButton>
          </>
        ) : null}
      </InputTeamNameBlock>
      <MyPaper>
        <div>
          <Typography variant="h6">Participants</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {project.users.length} member(s)
          </Typography>
          <hr />
        </div>
        <div>
          {project.users.map((user) => (
            <UserBlock key={user.uid}>
              <LeftBlock>
                <MyAvatar>{user.firstName[0] + user.lastName[0]}</MyAvatar>
                <MarginTypography>
                  {user.firstName} {user.lastName}{' '}
                  {user.uid === project.creator.uid ? '(creator) ' : null}
                  {currentUser.uid === user.uid ? '(you)' : null}
                </MarginTypography>
              </LeftBlock>
            </UserBlock>
          ))}
        </div>
      </MyPaper>
    </Box>
  );
};

export default LeftContent;
