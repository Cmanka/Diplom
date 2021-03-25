import { Container, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import Header from '../../core/components/Header';
import Navbar from '../../core/components/Navbar';
import useStyles from './styles';

const Boards: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Navbar />
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Boards;
