import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backgroundHeader: {
    background: '#2c6c5a',
  },
  homeImg: {
    border: '1 px solid black',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  centerBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  linkStyle: {
    color: 'white',
    '&:hover': {
      color: '#73b6a3',
    },
  },
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
