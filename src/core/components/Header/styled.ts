import {
  AppBar,
  Avatar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme';

export const MyAppBar = styled(AppBar)`
  && {
    background-color: #2c6c5a;
  }
`;

export const MyToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyTitle = styled(Typography)`
  && {
    margin-left: 20px;
  }
`;

export const MyTabs = styled(Tabs)`
  && {
    display: flex;
    justify-content: center;
    background-color: transparent;
    & > span {
      max-width: 40;
      width: 100%;
      background-color: #635ee7;
    }
  }
`;

export const MyTab = styled(Tab)`
  texttransform: none;
  color: #fff;
  // fontWeight: theme.typography.fontWeightRegular,
  // fontSize: theme.typography.pxToRem(15),
  // marginRight: theme.spacing(1),
  // '&:focus': {
  //   opacity: 1,
  // },
`;

export const MyAvatar = styled(Avatar)`
  background-color: white !important;
  color: ${theme.palette.primary.main} !important;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
