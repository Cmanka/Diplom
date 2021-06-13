import { CircularProgress } from '@material-ui/core';
import { LoaderPlace } from './styled';

export interface LoadingProps {
  position: string;
}

const Loading = ({ position }: LoadingProps) => {
  return (
    <LoaderPlace position={position}>
      <CircularProgress />
    </LoaderPlace>
  );
};

export default Loading;
