import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    alignSelf: 'center',
    margin: 'auto',
  },

  container: {
    padding: '0 5%', width: '100%', margin: 'auto',
  },
});
