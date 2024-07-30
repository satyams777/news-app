import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { CircularProgress, Grid, Typography } from '@mui/material';
import CardItem from './CardItem';

function CardList({ isListView }) {
  const dispatch = useDispatch();
  const { items, status, error, currentPage, itemsPerPage } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'failed') {
    return <Typography variant="h6" color="error">Error: {error}</Typography>;
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return <Typography variant="h6">No posts available.</Typography>;
  }

  // Calculate the indices of the posts to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <Grid container spacing={2} direction={isListView ? 'column' : 'row'}>
      {currentItems.map((post) => (
        <Grid item xs={12} sm={isListView ? 12 : 6} md={isListView ? 12 : 4} key={post.id}>
          <CardItem post={post} isListView={isListView} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
