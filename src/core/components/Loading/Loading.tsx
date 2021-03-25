import { CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { useStyles } from './styles';

const Loading: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loadingColor} />
    </div>
  );
};

export default Loading;
