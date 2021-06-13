import { useSelector } from 'react-redux';
import Form from './components/Form';
import { selectAuthLoadingState } from 'core/selectors/auth';
import { auth } from 'core/firebase';
import { Redirect } from 'react-router';
import Loading from 'core/components/Loading';

const Register = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const user = auth.currentUser;

  return (
    <>
      {isLoading ? (
        <Loading position="absolute" />
      ) : user ? (
        <Redirect to="/" />
      ) : (
        <Form />
      )}
    </>
  );
};

export default Register;
