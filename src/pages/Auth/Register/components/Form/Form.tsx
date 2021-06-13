import { Container, Grid, TextField, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { FC, memo, useEffect } from 'react';
import { HeaderForm, IconBlock, MyButton, Link } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { RegisterFormValues } from './types';
import { register as registerAction } from 'core/actions/auth';
import { IRegister } from 'core/interfaces/IRegister';

const Form: FC = memo(() => {
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
    dispatch(registerAction(data as IRegister));
  });

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <HeaderForm>
          <IconBlock>
            <LockIcon />
          </IconBlock>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        </HeaderForm>
        <form>
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
            <Link to="/login">Back to sign in</Link>
          </Grid>
          <MyButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Sign Up
          </MyButton>
        </form>
      </div>
    </Container>
  );
});

export default Form;
