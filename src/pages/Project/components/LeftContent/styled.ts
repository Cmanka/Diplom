import { Avatar, Typography, Paper } from '@material-ui/core';
import styled from 'styled-components';
import theme from 'theme';

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const LeftBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const MyAvatar = styled(Avatar)`
  width: 24px !important;
  height: 24px !important;
  font-size: 10px !important;
  background-color: white !important;
  color: ${theme.palette.primary.main} !important;
  border: 1px solid #00000036;
`;

export const MarginTypography = styled(Typography)`
  margin-left: 10px !important;
`;

export const MyPaper = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
