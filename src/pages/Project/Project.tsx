import { Box } from '@material-ui/core';
import { selectProjectById } from 'core/selectors/project';
import LeftContent from './components/LeftContent';
import { useDispatch, useSelector } from 'react-redux';
import { ProjectProps } from './types';
import { selectUserDataState } from 'core/selectors/user';
import RightContent from './components/RightContent';
import { useEffect } from 'react';
import { selectTeams } from 'core/selectors/teams';
import { fetchTeams } from 'core/actions/team';
import { changeProject } from 'core/actions/project';

const Project = ({ match }: ProjectProps) => {
  const project = useSelector(selectProjectById(match.params.id));
  const currentUser = useSelector(selectUserDataState);
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    const isTeamInProj = (teamId: string) => {
      return teams.find((team) => team.id === teamId);
    };

    const isUserInTeam = (userId: string) => {
      return teams.some((team) => team.users.find((user) => user.uid === userId));
    };

    dispatch(fetchTeams());

    dispatch(
      changeProject({
        ...project,
        teams: [...project.teams.map((team) => isTeamInProj(team.id) || team)],
        users: [...project.users.filter((user) => isUserInTeam(user.uid) || project.creator.uid === user.uid)],
      })
    );
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      boxSizing="border-box"
      maxWidth="1000px"
      margin="0px auto"
      padding="20px"
      marginTop="20px"
    >
      <Box minWidth="240px" flex="0 0 320px">
        <LeftContent project={project} currentUser={currentUser} />
      </Box>
      <Box minWidth="240px" flex="0 1 640px" marginLeft="50px">
        <RightContent teams={teams} project={project} currentUser={currentUser} />
      </Box>
    </Box>
  );
};

export default Project;
