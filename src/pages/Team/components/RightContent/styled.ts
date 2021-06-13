import { LinkPaperProps } from './types';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const BoldTypogarphy = styled(Typography)`
  font-weight: 600 !important;
`;

export const MyPaper = styled(Paper)`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const LinkPaper = styled(Paper)`
  padding: ${(props: LinkPaperProps) => (props.linksLength ? '10px' : '40px')};
  display: flex;
  flex-direction: column;
  background-color: ${(props: LinkPaperProps) =>
    props.linksLength ? '#f4f5f7 !important' : null};
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const LinkBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoardImg = styled.img`
  max-width: 144px;
  max-height: 144px;
`;

export const LinkImg = styled.img`
  max-width: 144px;
  max-height: 240px;
`;
