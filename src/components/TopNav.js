import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0
  },
});

export default function BottomNav() {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
      <BottomNavigationAction label='Main' icon={<WhatshotIcon color="secondary"/>} />
      <BottomNavigationAction label='Chat' icon={<ChatIcon />} />
    </BottomNavigation>
  );
}
