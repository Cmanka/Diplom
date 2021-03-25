import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#35584e',
    '&:hover': {
      background: '#35582e85',
      borderRadius: '8px',
    },
  },
  li: {
    fontSize: '24px',
    marginBottom: '5px	',
  },
  imgStyle: {
    width: '100x',
    height: '50px',
  },
  textStyle: {
    marginLeft: '10px',
    paddingTop: '5px',
    fontWeight: 'bolder',
  },
  activeLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#35584e',
    background: '#35584e57',
    borderRadius: '8px',
  },
}));

export default useStyles;
