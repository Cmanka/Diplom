import React, { FC, useState, MouseEvent } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DeveloperBoardTwoToneIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import useStyles from './styles';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { selectUserAvatarState } from '../../selectors/user';
import { userClearData } from '../../actions/user';

const Header: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userAvatar = useSelector(selectUserAvatarState);
  const [anchor, setAnchor] = useState(null);

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
    dispatch(logout());
    dispatch(userClearData());
    history.push('/login');
  };

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense" className={classes.backgroundHeader}>
        <Box className={classes.flexContainer}>
          <Box>
            <NavLink to="/" className={classes.linkStyle}>
              <HomeTwoToneIcon style={{ width: '30px', height: '30px' }} />
            </NavLink>
            <NavLink to="/boards" className={classes.linkStyle}>
              <DeveloperBoardTwoToneIcon
                style={{ marginLeft: '10px', width: '30px', height: '30px' }}
              />
            </NavLink>
          </Box>
          <Box className={classes.centerBlock}>
            <EmojiPeopleTwoToneIcon />
            <Typography variant="h6">Corporate trello</Typography>
          </Box>
          <Box>
            <Button onClick={handleClick}>
              <Avatar
                alt="Remy Sharp"
                src={
                  userAvatar
                    ? userAvatar
                    : 'https://media.defense.gov/2020/Feb/19/2002251686/700/465/0/200219-A-QY194-002.JPG'
                }
              />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
              style={{ marginTop: '35px', marginLeft: '10px' }}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
