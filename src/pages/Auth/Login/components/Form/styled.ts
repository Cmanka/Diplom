import { Avatar, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing(5)}px;
`;

export const IconBlock = styled(Avatar)`
  background-color: ${theme.palette.primary.main} !important;
`;

export const MyButton = styled(Button)`
  margin-top: ${theme.spacing(2)}px;
`;

export const LinksBlock = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.palette.primary.main};
  margin-top: ${theme.spacing(2)}px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${theme.palette.primary.main};
  }
`;
