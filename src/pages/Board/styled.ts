import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import theme from 'theme';

export const TitleBlock = styled.div`
  text-align: center;
`;

export const GridContainer = styled(Grid)`
  padding: ${theme.spacing(3)}px;
  box-sizing: border-box;
`;

export const MyGrid = styled(Grid)`
  > button {
    background-color: black;
  }
`;

export const ColorButton = styled(Button)`
  margin-top: 10px !important;
  width: 100%;
`;
