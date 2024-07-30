import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleView } from '../features/posts/postsSlice';
import { Switch, FormControlLabel } from '@mui/material';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.posts.view);

  return (
    <FormControlLabel
      control={<Switch checked={view === 'grid'} onChange={() => dispatch(toggleView())} />}
      label="View Toggle"
    />
  );
};

export default ToggleButton;
