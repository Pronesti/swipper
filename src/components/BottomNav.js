import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StarsIcon from '@material-ui/icons/Stars';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
});

export default function BottomNav() {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label='Cancel' icon={<CancelIcon fontSize="large" color="error"/>} />
      <BottomNavigationAction label='Super' icon={<StarsIcon fontSize="large" color="primary"/>} />
      <BottomNavigationAction label='Like' icon={<FavoriteIcon fontSize="large" color="secondary"/>} />
    </BottomNavigation>
  );
}
