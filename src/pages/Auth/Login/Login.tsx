import { useSelector } from 'react-redux';
import Form from './components/Form';
import { selectAuthData, selectAuthLoadingState } from 'core/selectors/auth';
import { Redirect } from 'react-router';
import Loading from 'core/components/Loading';

const Login = () => {
  const isLoading = useSelector(selectAuthLoadingState);
  const user = useSelector(selectAuthData);

  return (
    <>
      {isLoading ? (
        <Loading position="absolute" />
      ) : user?.uid ? (
        <Redirect to="/" />
      ) : (
        <Form />
      )}
    </>
  );
};

export default Login;
