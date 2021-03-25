import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  rightContent: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
  },
  formStyle: {
    padding: '10px',
  },
  marginButton: {
    marginTop: '10px',
  },
}));

export default useStyles;
