import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Form from './components/Form';
import { selectAuthLoadingState } from '../../../core/selectors/auth';
import { auth } from '../../../core/firebase';
import { Redirect } from 'react-router';
import Loading from '../../../core/components/Loading';

const Register: FC = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const user = auth.currentUser;

  return <>{isLoading ? <Loading /> : user ? <Redirect to="/" /> : <Form />}</>;
};

export default Register;
