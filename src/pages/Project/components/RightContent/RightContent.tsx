import { Box, IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import { RightContentProps } from './types';
import { MyPaper, BoardImg, BoldTypography } from './styled';
import { Images } from 'core/constants/images';
import AddIcon from '@material-ui/icons/Add';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITeam } from 'core/interfaces/ITeam';
import { changeProject } from 'core/actions/project';
import { selectProjectsLoading } from 'core/selectors/project';
import Loading from 'core/components/Loading';
import ClearIcon from '@material-ui/icons/Clear';
import ForwardIcon from '@material-ui/icons/Forward';
import { changeTeam } from 'core/actions/team';
import AddBoardToProj from 'core/components/Dialogs/AddBoardToProj';
import { IBoard } from 'core/interfaces/IBoard';
import { addBoard } from 'core/actions/board';
import { Link } from 'react-router-dom';

const RightContent = ({ project, currentUser, teams }: RightContentProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const isLoading = useSelector(selectProjectsLoading);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpen(false);
  };

  const onAddBoard = (board: IBoard) => {
    dispatch(
      changeProject({
        ...project,
        boards: [...project.boards, board],
      })
    );
    dispatch(addBoard(board));
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickAddTeam = (team: ITeam) => {
    dispatch(
      changeProject({
        ...project,
        teams: [...project.teams, team],
        users: [...project.users, ...team.users.filter((user) => !project.users.find((u) => user.uid === u.uid))],
      })
    );
    dispatch(changeTeam({ ...team, projects: [...team.projects, project] }));
    handleClose();
  };

  const onClickRemoveTeam = (team: ITeam) => {
    dispatch(
      changeProject({
        ...project,
        teams: [...project.teams.filter((t) => t.id !== team.id)],
        users: [
          ...project.users.filter(
            (user) => !team.users.find((u) => u.uid === user.uid && u.uid !== project.creator.uid)
          ),
        ],
      })
    );
    dispatch(changeTeam({ ...team, projects: [...team.projects.filter((proj) => proj.id !== project.id)] }));
    handleClose();
  };

  const isTeamInProject = (teamId: string) => {
    return project.teams.length ? project.teams.find((team) => team.id === teamId) : false;
  };

  return (
    <Box>
      <AddBoardToProj open={open} handleClose={handleCloseModal} onAddBoard={onAddBoard} user={currentUser} />
      <Box>
        <Box display="flex" justifyContent="space-between">
          <BoldTypography variant="h6">Teams working in project</BoldTypography>
          <IconButton onClick={handleClick} size="small">
            <AddIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {teams.map((team) => {
              return (
                !isTeamInProject(team.id) && (
                  <MenuItem key={team.id} onClick={() => onClickAddTeam(team)}>
                    {team.name}
                  </MenuItem>
                )
              );
            })}
          </Menu>
        </Box>
        <MyPaper arrLength={project.teams.length}>
          {isLoading ? (
            <Loading position="relative" />
          ) : project.teams.length ? (
            project.teams.map((team, i) => (
              <Paper
                key={team.id}
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  marginTop: i !== 0 ? '10px' : 0,
                }}
              >
                <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                  <h5 style={{ margin: 0 }}>{team.name}</h5>
                  <IconButton onClick={() => onClickRemoveTeam(team)} size="small">
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Members({team.users.length})
                </Typography>

                <Typography variant="caption" component="p">
                  Team creator:
                  {`${team.creator.firstName} ${team.creator.lastName}`}
                </Typography>
              </Paper>
            ))
          ) : (
            <>
              <BoardImg src={Images.Boards} />
              <div>
                <h3>No teams</h3>
              </div>
            </>
          )}
        </MyPaper>
      </Box>
      <Box marginTop="30px">
        <Box display="flex" justifyContent="space-between">
          <BoldTypography variant="h6">Boards in project</BoldTypography>
          <IconButton onClick={() => setOpen(true)} size="small">
            <AddIcon />
          </IconButton>
        </Box>
        <MyPaper arrLength={project.boards.length}>
          {isLoading ? (
            <Loading position="relative" />
          ) : project.boards.length ? (
            project.boards.map((board, i) => (
              <Paper
                key={board.id}
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  marginTop: i !== 0 ? '10px' : 0,
                }}
              >
                <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                  <h5 style={{ margin: 0 }}>{board.title}</h5>
                  <IconButton size="small">
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      Members({board.users.length})
                    </Typography>
                    <Typography variant="caption" component="p">
                      Board creator:
                      {`${board.creator.firstName} ${board.creator.lastName}`}
                    </Typography>
                  </Box>
                  <Link to={`/boards/${board.id}`} style={{ textDecoration: 'none' }}>
                    <IconButton size="small">
                      <ForwardIcon />
                    </IconButton>
                  </Link>
                </Box>
              </Paper>
            ))
          ) : (
            <>
              <BoardImg src={Images.Boards} />
              <div>
                <h3>Boards list is empty</h3>
              </div>
            </>
          )}
        </MyPaper>
      </Box>
    </Box>
  );
};

export default RightContent;
