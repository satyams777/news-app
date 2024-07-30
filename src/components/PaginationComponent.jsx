// PaginationComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { setPage } from '../features/posts/postsSlice';

const PaginationComponent = () => {
  const dispatch = useDispatch();
  const { items, currentPage, itemsPerPage } = useSelector((state) => state.posts);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handleChange = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      style={{ marginTop: '1rem' }}
    />
  );
};

export default PaginationComponent;
