import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

export type BoardProps = RouteComponentProps<MatchParams>;
