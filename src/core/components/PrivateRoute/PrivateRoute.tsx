import { Redirect, Route } from 'react-router-dom';
import { auth } from 'core/firebase';
import { Props } from './types';

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const isAuth = auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) => {
        const params = Object.keys(props.match.params);
        if (isAuth) return <Component {...props} />;
        if (params.length > 0) return <Redirect to="/404" />;
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
