import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 70
  }
});

export default function BottomNav() {
  const classes = useStyles();
  let history = useHistory();
  return (
    <BottomNavigation className={classes.root} style={{ overflow: 'hidden' }}>
      <BottomNavigationAction label='Profile' icon={<PersonIcon />} onClick={() => history.push('/profile')} />
      <BottomNavigationAction label='Main' icon={<WhatshotIcon color='secondary' />} onClick={() => history.push('/')} />
      <BottomNavigationAction label='Chat' icon={<ChatIcon />} onClick={() => history.push('/chat')} />
    </BottomNavigation>
  );
}
