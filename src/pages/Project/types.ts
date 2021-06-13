import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

export type ProjectProps = RouteComponentProps<MatchParams>;
