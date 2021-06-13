import {
  CardActions,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import theme from 'theme';

export const TitleBlock = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const MyContainer = styled(Container)`
  margin: ${theme.spacing(5)}px;
`;

export const TitleText = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled(Grid)`
  padding: ${theme.spacing(5)}px;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
`;

export const GridItem = styled(Grid)`
  margin: 10px 0 !important;
  padding: 30px !important;
`;

export const CardActionBlock = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MyPaper = styled(Paper)`
  padding: 10px;
  background-color: ${theme.palette.primary.main} !important;
`;
