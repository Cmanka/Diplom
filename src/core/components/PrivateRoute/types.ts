import { RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}
