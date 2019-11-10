import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reject, like, superLike } from '../actions/mainActions';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarsIcon from '@material-ui/icons/Stars';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: 75
  }
});

export default function BottomNav() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  function redirect(action) {
    dispatch(action);
    history.push('/');
  }

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label='Reject' icon={<CancelIcon fontSize='large' color='error' />} onClick={() => redirect(reject())} />
      <BottomNavigationAction label='Super' icon={<StarsIcon fontSize='large' color='primary' />} onClick={() => redirect(superLike())} />
      <BottomNavigationAction label='Like' icon={<FavoriteIcon fontSize='large' color='secondary' />} onClick={() => redirect(like())} />
    </BottomNavigation>
  );
}
