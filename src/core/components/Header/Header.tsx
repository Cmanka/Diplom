import React, { useState, MouseEvent, useEffect } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { selectUserDataState } from '../../selectors/user';
import { userClearData } from '../../actions/user';
import { MyAppBar, MyAvatar, MyToolBar, StyledLink } from './styled';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const userInfo = useSelector(selectUserDataState);
  const [anchor, setAnchor] = useState(null);
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleProfile = () => {
    handleClose();
    history.push('/profile');
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    dispatch(userClearData());
    setValue('/');
    history.push('/');
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const clickOnNavigation = (path: string) => {
    history.push(path);
  };

  return (
    <MyAppBar position="sticky">
      <MyToolBar variant="dense">
        <StyledLink to="/">
          <Typography variant="h6">App name</Typography>
        </StyledLink>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab
            icon={<HomeIcon />}
            label="Home"
            value="/"
            onClick={() => clickOnNavigation('/')}
          ></Tab>
          <Tab
            icon={<GroupIcon />}
            label="Teams"
            value="/teams"
            onClick={() => clickOnNavigation('/teams')}
          />
          <Tab
            icon={<AccountTreeIcon />}
            label="Projects"
            value="/projects"
            onClick={() => clickOnNavigation('/projects')}
          />
          <Tab
            icon={<AssignmentIcon />}
            label="Boards"
            value="/boards"
            onClick={() => clickOnNavigation('/boards')}
          />
          <Tab
            icon={<BookmarkIcon />}
            label="Bookmarks"
            value="/bookmarks"
            onClick={() => clickOnNavigation('/bookmarks')}
          />
        </Tabs>

        <Box>
          <Button onClick={handleClick} disabled={userInfo ? false : true}>
            <MyAvatar>
              {userInfo ? userInfo.firstName[0] + userInfo.lastName[0] : null}
            </MyAvatar>
          </Button>
          {userInfo ? (
            <Menu
              id="simple-menu"
              anchorEl={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
              style={{ marginTop: '55px' }}
            >
              <MenuItem style={{ width: '200px' }} disabled>
                App name
              </MenuItem>
              <hr />
              <MenuItem disabled>
                {userInfo.firstName} {userInfo.lastName}
              </MenuItem>
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleProfile}>Settings</MenuItem>
              <MenuItem onClick={handleProfile}>Navigation page</MenuItem>
              <hr />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          ) : null}
        </Box>
      </MyToolBar>
    </MyAppBar>
  );
};

export default Header;
