import { Container, Grid, Paper } from '@material-ui/core';
import Header from '../../core/components/Header';
import React, { FC } from 'react';
import Navbar from '../../core/components/Navbar';
import useStyles from './styles';

const Home: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={3}>
              <div>
                <img
                  src="https://a.trellocdn.com/prgb/dist/images/home/orientation/no-content.e55b3540e5c1f06a51d7.svg"
                  alt="loading.."
                  className={classes.img}
                />
              </div>
              <div className={classes.bottomContent}>
                <h3 className={classes.title}>Welcome to the home page</h3>
                <p className={classes.title}>
                  Invite people to boards and cards, leave comments, add
                  deadlines, and we'll display the most important activities
                  here.
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
