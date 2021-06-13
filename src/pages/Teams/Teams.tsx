import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import * as Styled from './styled';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDataState } from 'core/selectors/user';
import CreateTeam from 'core/components/Dialogs/CreateTeam';
import { ITeam } from 'core/interfaces/ITeam';
import { addTeam, fetchTeams, removeTeam } from 'core/actions/team';
import { selectTeams, selectTeamsLoading } from 'core/selectors/teams';
import Loading from 'core/components/Loading';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ForwardIcon from '@material-ui/icons/Forward';
import { Link } from 'react-router-dom';
import { IUser } from 'core/interfaces/IUser';
import { userProfileUpdate } from 'core/actions/user';
import { IBookmark } from 'core/interfaces/IBookmark';

const Teams = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUserDataState);
  const teamsIsLoading = useSelector(selectTeamsLoading);
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onAddTeam = (team: ITeam) => {
    dispatch(addTeam(team));
  };

  const onRemoveTeam = (teamId: string, creatorId: string) => {
    if (creatorId === user.uid) dispatch(removeTeam(teamId));
  };

  const onChangeTeam = (team: ITeam) => {
    const bookmark: IBookmark = {
      id: team.id,
      name: team.name,
      type: 'team',
      creator: `${team.creator.firstName} ${team.creator.lastName}`,
    };

    const isFav = [...user.bookmarks].some((bm) => bm.id === bookmark.id);

    const changedUser: IUser = {
      ...user,
      bookmarks: isFav ? [...user.bookmarks.filter((bm) => bm.id !== bookmark.id)] : [...user.bookmarks, bookmark],
    };

    dispatch(userProfileUpdate(changedUser));
  };

  return (
    <Styled.MyContainer fixed>
      <Styled.TitleBlock>
        <Typography variant="h3" component="div">
          Teams page
          <Styled.TitleText variant="subtitle1">
            on this page you can select and create teams
            <IconButton color="primary" onClick={handleClickOpen} size="small">
              <AddCircleIcon />
            </IconButton>
          </Styled.TitleText>
        </Typography>
        <CreateTeam handleClose={handleClose} open={open} user={user} onAddTeam={onAddTeam} />
      </Styled.TitleBlock>

      {teamsIsLoading ? (
        <Loading position="absolute" />
      ) : teams.length ? (
        <Styled.GridContainer container spacing={3}>
          {teams.map((team, ind) => (
            <Styled.GridItem item xs={6} key={ind}>
              <Styled.MyPaper elevation={3}>
                <Styled.TopBlock>
                  <Styled.BoldTypography variant="h5">{team.name}</Styled.BoldTypography>
                  <Typography variant="body2" color="textSecondary">
                    {team.dateCreate}
                  </Typography>
                </Styled.TopBlock>
                <Styled.HrWithoutMargin />
                <Styled.MiddleBlock>
                  <Typography variant="h6">Projects count: {team.projects.length}</Typography>
                  <Typography variant="h6">Members count: {team.users.length}</Typography>
                  <Typography variant="h6">
                    Creator: {team.creator.firstName} {team.creator.lastName} (
                    <Typography component="span" color="textSecondary">
                      {team.creator.email}
                    </Typography>
                    )
                  </Typography>
                </Styled.MiddleBlock>
                <Styled.HrWithoutMargin />
                <Styled.BottomBlock>
                  <div>
                    <Tooltip title="add to bookmark">
                      <IconButton
                        size="small"
                        onClick={() => onChangeTeam(team)}
                        color={user?.bookmarks.some((bookmark) => bookmark.id === team.id) ? 'primary' : 'default'}
                      >
                        <BookmarkIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={user.uid !== team.creator.uid ? 'you not a creator' : 'remove team'}>
                      <IconButton size="small" onClick={() => onRemoveTeam(team.id, team.creator.uid)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <Link to={`/teams/${team.id}`}>
                    <IconButton size="small">
                      <ForwardIcon />
                    </IconButton>
                  </Link>
                </Styled.BottomBlock>
              </Styled.MyPaper>
            </Styled.GridItem>
          ))}
        </Styled.GridContainer>
      ) : null}
    </Styled.MyContainer>
  );
};

export default Teams;
