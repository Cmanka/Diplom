import { Card, CardActions, Container, Grid, Paper, Typography } from '@material-ui/core';
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
  box-sizing: border-box;
  margin: 0;
  width: 100%;
`;

export const GridItem = styled(Grid)`
  margin: 10px 0 !important;
  height: 320px;
`;

export const MyCard = styled(Card)`
  height: 100%;
`;

export const CardActionBlock = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MyPaper = styled(Paper)`
  padding: 30px;
  height: 100%;
  box-sizing: border-box;
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 20%;
`;

export const BoldTypography = styled(Typography)`
  font-weight: 600;
`;

export const HrWithoutMargin = styled.hr`
  margin: 0;
`;

export const MiddleBlock = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BottomBlock = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
