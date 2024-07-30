// ViewToggle.js
import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { List, Apps } from '@mui/icons-material';

function ViewToggle({ isListView, setIsListView }) {
  return (
    <ButtonGroup>
      <Button onClick={() => setIsListView(true)} variant={isListView ? 'contained' : 'outlined'}>
        <List />
      </Button>
      <Button onClick={() => setIsListView(false)} variant={!isListView ? 'contained' : 'outlined'}>
        <Apps />
      </Button>
    </ButtonGroup>
  );
}

export default ViewToggle;
