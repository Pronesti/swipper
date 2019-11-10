import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyself } from '../actions/mainActions';
import { useParams, useHistory } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';
import { Typography, Fab } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import Gallery from '../components/Gallery';

export default function Profile() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.main.users);
  const myProfile = useSelector(state => state.main.myProfile);
  const [user, setUser] = useState();
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    //fetch user
    console.log(id);
    if (id) {
      dispatch(setMyself(false));
      setUser(users[id]);
    } else {
      dispatch(setMyself(true));
      setUser(myProfile);
    }
  }, [id, user]);

  function swipe(eventData) {
    if (eventData.dir === 'Left') {
      if (index < user.photos.length - 1) return setIndex(index + 1);
    } else if (eventData.dir === 'Right') {
      if (index > 0) return setIndex(index - 1);
    }
  }
  if (!user) return <Typography> Loading ...</Typography>;
  return (
    <div className='profile'>
      <Swipeable onSwiped={eventData => swipe(eventData)}>
        <Gallery photo={user.photos[index]} />
      </Swipeable>
      <Typography variant='h2' className='no-over-y'>
        {user.name} {user.age}
      </Typography>
      <Typography variant='h6'>{1} km away</Typography>
      <hr />
      <Typography variant='body1'>{user.desc}</Typography>
      <div className='fab'>
        <Fab
          size='large'
          onClick={() => {
            dispatch(setMyself(false));
            history.push('/');
          }}>
          <CancelIcon />
        </Fab>
      </div>
    </div>
  );
}
