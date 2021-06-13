import { Button, TextField } from '@material-ui/core';
import React, { FC, memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  userProfileUpdate,
  userUpdateAvatar,
} from '../../../../core/actions/user';
import { selectUserDataState } from '../../../../core/selectors/user';
import useStyles from './styles';
import { ProfileFormValues } from './types';

const Form: FC = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUserDataState);
  const { register, handleSubmit, setValue } = useForm<ProfileFormValues>();

  useEffect(() => {
    register({ name: 'firstName' });
    register({ name: 'lastName' });
    register({ name: 'file' });
  }, [register]);

  const onSubmit = handleSubmit((data) => {
    // if (data.firstName && data.lastName) {
    //   dispatch(
    //     userProfileUpdate({
    //       firstName: data.firstName,
    //       lastName: data.lastName,
    //       email: user.email,
    //       uid: user.uid,
    //     })
    //   );
    //   setValue('firstName', '');
    //   setValue('lastName', '');
    // }
    // if (data.file[0]) dispatch(userUpdateAvatar(data.file[0]));
  });

  return (
    <div className={classes.rightContent}>
      <h3 className={classes.title}>User editor</h3>
      <hr />
      <form className={classes.formStyle} onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          label="First name"
          name="firstName"
          autoFocus
          inputRef={register}
        />
        <TextField
          variant="outlined"
          margin="dense"
          required
          fullWidth
          name="lastName"
          label="Last name"
          inputRef={register}
        />
        <Button
          variant="contained"
          fullWidth
          component="label"
          className={classes.marginButton}
        >
          Upload Avatar
          <input name="file" type="file" ref={register} hidden />
        </Button>
        <Button
          className={classes.marginButton}
          type="submit"
          fullWidth
          variant="contained"
          onClick={onSubmit}
        >
          Edit
        </Button>
      </form>
    </div>
  );
});

export default Form;
