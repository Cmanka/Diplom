import React, { FC, useEffect } from 'react';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './core/reducers';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './core/actions/auth';
import { auth } from './core/firebase';
import { userProfile } from './core/actions/user';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(loginSuccess(user?.uid));
      dispatch(userProfile());
    });
  }, [dispatch]);

  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Boards} path="/boards" exact />
          <Route component={Profile} path="/profile" exact />
          <Route component={Login} path="/login" exact />
          <Route component={Register} path="/register" exact />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  );
};

export default App;
