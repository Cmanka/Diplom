import React, { FC, useEffect } from 'react';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './core/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './core/actions/auth';
import { auth } from './core/firebase';
import { userProfile } from './core/actions/user';
import Header from './core/components/Header';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core';
import PrivateRoute from 'core/components/PrivateRoute/PrivateRoute';
import Teams from 'pages/Teams';
import Board from 'pages/Board';
import Projects from 'pages/Projects';
import Team from 'pages/Team';
import Bookmarks from 'pages/Bookmarks';
import Project from 'pages/Project';
import { selectUserLoadingState } from 'core/selectors/user';
import Loading from 'core/components/Loading';

const App: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserLoadingState);
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(loginSuccess(user?.uid));
      dispatch(userProfile());
    });
  }, [dispatch]);

  return (
    <ReactReduxFirebaseProvider {...rrfProps}>
      <MuiThemeProvider theme={theme}>
        <Header />
        {isLoading && location.pathname !== '/profile' ? (
          <Loading position="absolute" />
        ) : (
          <Switch>
            <Route component={Home} path="/" exact />
            <PrivateRoute component={Teams} path="/teams" exact />
            <PrivateRoute component={Team} path="/teams/:id" exact />
            <PrivateRoute component={Boards} path="/boards" exact />
            <PrivateRoute component={Bookmarks} path="/bookmarks" exact />
            <PrivateRoute component={Board} path="/boards/:id" exact />
            <PrivateRoute component={Projects} path="/projects" exact />
            <PrivateRoute component={Project} path="/projects/:id" exact />
            <PrivateRoute component={Profile} path="/profile" exact />
            <Route component={Login} path="/login" exact />
            <Route component={Register} path="/register" exact />
          </Switch>
        )}
      </MuiThemeProvider>
    </ReactReduxFirebaseProvider>
  );
};

export default App;
