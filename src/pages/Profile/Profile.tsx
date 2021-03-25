import { Container, Grid, Paper } from '@material-ui/core';
import Header from '../../core/components/Header';
import React, { FC, useEffect } from 'react';
import Navbar from '../../core/components/Navbar';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserAvatarState,
  selectUserDataState,
  selectUserLoadingState,
  selectUserAvatarLoadingState,
} from '../../core/selectors/user';
import { userProfile } from '../../core/actions/user';
import Information from './components/Information';
import Form from './components/Form';
const Profile: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserDataState);
  const isLoading = useSelector(selectUserLoadingState);
  const userAvatar = useSelector(selectUserAvatarState);
  const isAvatarLoading = useSelector(selectUserAvatarLoadingState);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={3} className={classes.content}>
              <Information
                isLoading={isLoading}
                userData={userData}
                userAvatar={userAvatar}
                isAvatarLoading={isAvatarLoading}
              />
              <Form />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
