import IconButton from '@material-ui/core/IconButton';
import Chat from '@material-ui/icons/Chat';
import React from 'react';
import { Link } from 'react-router-dom';


export function ConversationsButton() {
  return (
    <Link to="/conversations">
      <IconButton color='default' aria-label="profile">
        <Chat fontSize="large" />
      </IconButton>
    </Link>
  )
}