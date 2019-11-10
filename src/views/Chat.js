import React from 'react';
import { Paper, InputBase, IconButton, Card } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { setMyself } from '../actions/mainActions';

export default function Chat() {
  const dispatch = useDispatch();
  dispatch(setMyself(true));
  return (
    <Paper className='chat'>
      <Card className='chatBubble1'>Hello!</Card>
      <Card className='chatBubble2'>Hi there!</Card>

      <div className='chatInput'>
        <InputBase placeholder='' inputProps={{ 'aria-label': 'search google maps' }} />
        <IconButton type='submit' aria-label='Send'>
          <SendIcon />
        </IconButton>
      </div>
    </Paper>
  );
}
