import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { FC, memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { RegisterFormValues } from './types';
import { register as registerAction } from '../../../../../core/actions/auth';
import { IAuth } from '../../../../../core/interfaces/IAuth';

const Form: FC = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<RegisterFormValues>();

  useEffect(() => {
    register(
      { name: 'firstName' },
      {
        required: 'First name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
    register(
      { name: 'lastName' },
      {
        required: 'Last name is required',
        minLength: {
          value: 2,
          message: 'Min length is 2',
        },
      }
    );
    register({ name: 'email' }, { required: 'Email is required' });
    register(
      { name: 'password' },
      {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Min length is 6',
        },
      }
    );
  }, [register]);

  const onSubmit = handleSubmit((data) => {
    dispatch(registerAction(data as IAuth));
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="First name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            inputRef={register}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            inputRef={register}
          />
          <Grid container justify="center">
            <NavLink to="/login">Back to sign in</NavLink>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
});

export default Form;
