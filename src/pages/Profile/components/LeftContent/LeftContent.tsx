import { Box, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import theme from 'theme';
import { LeftContentProps } from './types';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { MyAvatar, InputContainer, IconGrid } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileUpdate } from 'core/actions/user';
import { selectTeams } from 'core/selectors/teams';
import { ChangeEvent, useState } from 'react';

const LeftContent = ({ user, userAvatar }: LeftContentProps) => {
  const [organization, setOrganization] = useState(user.organization);
  const [position, setPosition] = useState(user.position);
  const [location, setLocation] = useState(user.location);
  const [focusedOrganization, setFocusedOrganization] = useState(false);
  const [focusedPosition, setFocusedPosition] = useState(false);
  const [focusedLocation, setFocusedLocation] = useState(false);
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  const onChangeOrganization = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const onClickClearOrganization = () => {
    setFocusedOrganization(false);
    setOrganization(user.organization);
  };

  const onClickDoneOrganization = () => {
    setFocusedOrganization(false);
    dispatch(userProfileUpdate({ ...user, organization }));
  };

  const onChangePosition = (e: ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const onClickClearPosition = () => {
    setFocusedPosition(false);
    setPosition(user.position);
  };

  const onClickDonePosition = () => {
    setFocusedPosition(false);
    dispatch(userProfileUpdate({ ...user, position }));
  };

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const onClickClearLocation = () => {
    setFocusedLocation(false);
    setLocation(user.location);
  };

  const onClickDoneLocation = () => {
    setFocusedLocation(false);
    dispatch(userProfileUpdate({ ...user, location }));
  };

  return (
    <>
      <Paper elevation={3}>
        <Box padding="20px">
          <h3>Intelligence</h3>
          <Box>
            <InputContainer container alignItems="center">
              <IconGrid item xs={1}>
                <ApartmentIcon />
              </IconGrid>
              <Grid item xs={focusedOrganization ? 7 : 10}>
                <TextField
                  value={organization}
                  onChange={onChangeOrganization}
                  focused={focusedOrganization}
                  onFocus={() => setFocusedOrganization(true)}
                  label="Organization"
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              </Grid>
              {focusedOrganization ? (
                <Grid item xs={3}>
                  <IconButton onClick={onClickDoneOrganization} size="small">
                    <DoneIcon />
                  </IconButton>
                  <IconButton onClick={onClickClearOrganization} size="small">
                    <ClearIcon />
                  </IconButton>
                </Grid>
              ) : null}
            </InputContainer>
            <InputContainer container spacing={1} alignItems="center">
              <IconGrid item xs={1}>
                <LocalMallIcon />
              </IconGrid>
              <Grid item xs={focusedPosition ? 7 : 10}>
                <TextField
                  value={position}
                  onChange={onChangePosition}
                  focused={focusedPosition}
                  onFocus={() => setFocusedPosition(true)}
                  label="Position"
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              </Grid>
              {focusedPosition ? (
                <Grid item xs={3}>
                  <IconButton onClick={onClickDonePosition} size="small">
                    <DoneIcon />
                  </IconButton>
                  <IconButton onClick={onClickClearPosition} size="small">
                    <ClearIcon />
                  </IconButton>
                </Grid>
              ) : null}
            </InputContainer>
            <InputContainer container spacing={1} alignItems="center">
              <IconGrid item xs={1}>
                <LocationOnIcon />
              </IconGrid>
              <Grid item xs={focusedLocation ? 7 : 10}>
                <TextField
                  value={location}
                  onChange={onChangeLocation}
                  focused={focusedLocation}
                  onFocus={() => setFocusedLocation(true)}
                  label="Location"
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              </Grid>
              {focusedLocation ? (
                <Grid item xs={3}>
                  <IconButton onClick={onClickDoneLocation} size="small">
                    <DoneIcon />
                  </IconButton>
                  <IconButton onClick={onClickClearLocation} size="small">
                    <ClearIcon />
                  </IconButton>
                </Grid>
              ) : null}
            </InputContainer>
            <h4>Contact details</h4>
            <InputContainer container spacing={1} alignItems="center">
              <Grid item>
                <MailIcon />
              </Grid>
              <Grid item>
                <Typography>{user.email}</Typography>
              </Grid>
            </InputContainer>
            <h4>Comands</h4>
            {teams.map((team) => (
              <div key={team.id}>
                <Link
                  to={`/teams/${team.id}`}
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.primary.main,
                  }}
                >
                  <Typography component="span">{team.name} </Typography>
                  <Typography component="span" variant="body2" color="textSecondary">
                    ({team.users.length} member)
                  </Typography>
                </Link>
              </div>
            ))}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default LeftContent;
