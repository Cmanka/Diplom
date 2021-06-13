import { IconButton, TextField } from '@material-ui/core';
import { InputTeamNameBlock, InputTeamDescBlock } from './styled';
import { ChangeEvent, useState } from 'react';
import { InputsBlockProps } from './types';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { changeTeam } from 'core/actions/team';
import { ITeam } from 'core/interfaces/ITeam';
import { selectUserDataState } from 'core/selectors/user';

const InputsBlock = ({ team }: InputsBlockProps) => {
  const [teamName, setTeamName] = useState(team.name);
  const [focusedTeamName, setFocusedTeamName] = useState(false);
  const [teamDesc, setTeamDesc] = useState(team.description);
  const [focusedTeamDesc, setFocusedTeamDesc] = useState(false);
  const user = useSelector(selectUserDataState);
  const dispatch = useDispatch();

  const onChangeTeamNameHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const onChangeTeamDescHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamDesc(e.target.value);
  };

  const onClickClearTeamIcon = () => {
    setTeamName(team.name);
    setFocusedTeamName(false);
  };

  const onClickClearDescIcon = () => {
    setTeamDesc(team.description);
    setFocusedTeamDesc(false);
  };

  const onClickDoneTeamName = () => {
    const changedTeam: ITeam = { ...team, name: teamName };
    dispatch(changeTeam(changedTeam));
    setFocusedTeamName(false);
  };

  const onClickDoneTeamDesc = () => {
    const changedTeam: ITeam = { ...team, description: teamDesc };
    dispatch(changeTeam(changedTeam));
    setFocusedTeamDesc(false);
  };

  return (
    <div>
      <InputTeamNameBlock>
        <TextField
          value={teamName}
          onChange={onChangeTeamNameHandle}
          id="outlined-secondary"
          label="Team name"
          variant="outlined"
          size="small"
          color="primary"
          disabled={team.creator.uid !== user.uid}
          onFocus={() => setFocusedTeamName(true)}
          focused={focusedTeamName}
          style={{ width: '80%' }}
          InputProps={{
            style: { fontSize: '20px' },
          }}
        />
        {focusedTeamName ? (
          <>
            <IconButton onClick={onClickDoneTeamName} size="small">
              <DoneIcon />
            </IconButton>
            <IconButton onClick={onClickClearTeamIcon} size="small">
              <ClearIcon />
            </IconButton>
          </>
        ) : null}
      </InputTeamNameBlock>
      <InputTeamDescBlock>
        <TextField
          InputProps={{
            style: { fontSize: '20px' },
          }}
          value={teamDesc}
          onChange={onChangeTeamDescHandle}
          label="Tell us how your team"
          variant="outlined"
          size="small"
          color="primary"
          disabled={team.creator.uid !== user.uid}
          onFocus={() => setFocusedTeamDesc(true)}
          multiline
          rows={focusedTeamDesc ? 4 : 0}
          style={{ width: '80%' }}
          focused={focusedTeamDesc}
        />
        {focusedTeamDesc ? (
          <>
            <IconButton onClick={onClickDoneTeamDesc} size="small">
              <DoneIcon />
            </IconButton>
            <IconButton onClick={onClickClearDescIcon} size="small">
              <ClearIcon />
            </IconButton>
          </>
        ) : null}
      </InputTeamDescBlock>
    </div>
  );
};

export default InputsBlock;
