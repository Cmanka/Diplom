import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      position: 'fixed',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
    loadingColor: {
      color: 'green',
    },
  })
);
