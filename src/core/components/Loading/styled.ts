import styled from 'styled-components';
import theme from '../../../theme';
import { LoadingProps } from './Loading';

export const LoaderPlace = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: ${(props: LoadingProps) => props.position};
  align-items: center;
  align-content: center;
  justify-content: center;
  color: ${theme.palette.primary.main};
`;
