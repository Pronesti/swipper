import React, { useState, useEffect } from 'react';
import { Swipeable } from 'react-swipeable';
import { Typography } from '@material-ui/core';
import Gallery from '../components/Gallery';

export default function User() {
    const [user, setUser] = useState();
    const [index, setIndex] = useState();
    useEffect(() => {
      //fetch user
    }, []);
    function swipe(eventData) {
        if (eventData.dir === 'Left') {
          if (index > 0) return setIndex(index - 1);
        } else if (eventData.dir === 'Right') {
          if (index < user.photos.length) return setIndex(index + 1);
        }
      }
    return (
        <div>
        <Swipeable onSwiped={eventData => swipe(eventData)}>
        <Gallery photo={user.photos[index]} />
        <Typography variant='h2'>
          {user.name} {user.age}
        </Typography>
        <Typography variant='h6'>{1} km away</Typography>
        <hr />
        <Typography variant='p'>{user.desc}</Typography>
      </Swipeable>
        </div>
    )
}
