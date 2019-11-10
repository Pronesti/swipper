import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { like, superLike, reject } from '../actions/mainActions';
import { Swipeable } from 'react-swipeable';
import SwipeBox from '../components/SwipeBox';

export default function Main() {
  const id = useSelector(state => state.main.currentIndex);
  const users = useSelector(state => state.main.users);
  const dispatch = useDispatch();
  const swipe = eventData => {
    switch (eventData.dir) {
      case 'Left':
        console.log('reject: ', id);
        dispatch(reject());
        break;
      case 'Right':
        console.log('like: ', id);
        dispatch(like());
        break;
      case 'Up':
        console.log('superlike: ', id);
        dispatch(superLike());
        break;
      case 'Down':
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Swipeable onSwiped={eventData => swipe(eventData)}>
        <SwipeBox user={users[id]} />
      </Swipeable>
    </div>
  );
}
