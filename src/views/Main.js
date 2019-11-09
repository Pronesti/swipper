import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable';
import { users } from '../dummy';
import SwipeBox from '../components/SwipeBox';

export default function Main() {
  const [id, setId] = useState(0);
  const swipe = eventData => {
    switch (eventData.dir) {
      case 'Left':
        console.log('cancel');
        setId(id + 1);
        break;
      case 'Right':
        console.log('like');
        setId(id + 1);
        break;
      case 'Up':
        console.log('superlike');
        setId(id + 1);
        break;
      case 'Down':
        console.log('down');
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
