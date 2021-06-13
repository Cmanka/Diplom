import { PaperProps } from './types';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const MyPaper = styled(Paper)`
  padding: ${(props: PaperProps) => (props.arrLength ? '10px' : '40px')};
  display: flex;
  flex-direction: column;
  background-color: ${(props: PaperProps) => (props.arrLength ? '#f4f5f7 !important' : null)};
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const BoardImg = styled.img`
  max-width: 144px;
  max-height: 144px;
`;

export const BoldTypography = styled(Typography)`
  font-weight: 600 !important;
`;
