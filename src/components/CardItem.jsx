import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../features/posts/postsSlice';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CardItem = ({ post, isListView }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ width: isListView ? '100%' : 'auto', maxWidth: isListView ? 'none' : 345, m: 1 }}>
      <CardContent>
        <IconButton
          onClick={() => dispatch(removePost(post.id))}
          sx={{ float: 'right' }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
