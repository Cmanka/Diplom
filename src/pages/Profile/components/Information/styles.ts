import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  leftContent: {
    width: '100%',
    height: '100%',
    borderRight: '1px solid black',
  },
  title: {
    textAlign: 'center',
  },
  avatarSize: {
    width: '200px',
    height: '200px',
    border: '1px solid black',
    borderRadius: '10px',
  },
  profileInfoContent: {
    display: 'flex',
    padding: '10px',
  },
  attrCont: {
    marginLeft: '10px',
  },
}));

export default useStyles;
