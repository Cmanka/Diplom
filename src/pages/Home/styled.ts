import { CardActionArea, CardMedia, Container, Grid } from '@material-ui/core';
import styled from 'styled-components';
import theme from 'theme';

export const MyContainer = styled(Container)`
  margin-top: ${theme.spacing(5)}px;
`;

export const GridContainer = styled(Grid)`
  padding: ${theme.spacing(5)}px;
`;

export const TitleBlock = styled.div`
  text-align: center;
`;

export const CardAction = styled(CardActionArea)`
  maxheight: 600px;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

export const CardMediaPlace = styled(CardMedia)`
  width: 100%;
  height: 350px;
  object-fit: fill;
`;
