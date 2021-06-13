import { Container, TextField, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { FC, memo, useEffect } from 'react';
import { HeaderForm, IconBlock, MyButton, LinksBlock, Link } from './styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { LoginFormValues } from './types';
import { login } from 'core/actions/auth';

const Form: FC = memo(() => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<LoginFormValues>();

  useEffect(() => {
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
    dispatch(login({ email: data.email, password: data.password }));
  });

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <HeaderForm>
          <IconBlock>
            <LockIcon />
          </IconBlock>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </HeaderForm>
        <form>
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
          <MyButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={onSubmit}
          >
            Sign In
          </MyButton>
          <LinksBlock>
            <Link to="/">Forgot password?</Link>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </LinksBlock>
        </form>
      </div>
    </Container>
  );
});

export default Form;
