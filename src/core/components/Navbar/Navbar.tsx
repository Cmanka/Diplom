import React, { FC } from 'react';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DeveloperBoardTwoToneIcon from '@material-ui/icons/DeveloperBoardTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import useStyles from './styles';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Navbar: FC = () => {
  const classes = useStyles();
  const router = useRouteMatch();

  return (
    <div>
      <nav>
        <div>
          <ul className={classes.list}>
            <li className={classes.li}>
              <NavLink
                to="/"
                className={
                  router.path === '/'
                    ? classes.link && classes.activeLink
                    : classes.link
                }
              >
                <HomeTwoToneIcon style={{ height: '50px', width: '50px' }} />
                <span className={classes.textStyle}>Home</span>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                to="/boards"
                className={
                  router.path === '/boards'
                    ? classes.link && classes.activeLink
                    : classes.link
                }
              >
                <DeveloperBoardTwoToneIcon
                  style={{ height: '50px', width: '50px' }}
                />
                <span className={classes.textStyle}>Boards</span>
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                to="/profile"
                className={
                  router.path === '/profile'
                    ? classes.link && classes.activeLink
                    : classes.link
                }
              >
                <AccountBoxTwoToneIcon
                  style={{ height: '50px', width: '50px' }}
                />
                <span className={classes.textStyle}>Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <hr />
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
