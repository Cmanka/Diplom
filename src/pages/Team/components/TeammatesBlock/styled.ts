import { Avatar, Button, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import theme from 'theme';

export const TopBlock = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-end;
`;

export const MyButton = styled(Button)`
  width: 80%;
`;

export const MyPaper = styled(Paper)`
  width: 80%;
  margin-top: 20px;
  padding: 20px;
`;

export const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const MyAvatar = styled(Avatar)`
  width: 24px !important;
  height: 24px !important;
  font-size: 10px !important;
  background-color: white !important;
  color: ${theme.palette.primary.main} !important;
  border: 1px solid #00000036;
`;

export const LeftBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const MarginTypography = styled(Typography)`
  margin-left: 10px !important;
`;
