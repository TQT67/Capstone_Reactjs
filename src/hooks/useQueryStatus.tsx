import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { QueryObserverResult } from '@tanstack/react-query';

type QueryStatusProps = {
  queryResult: QueryObserverResult;
};

const useQueryStatus = ({ queryResult }: QueryStatusProps) => {
  const { isLoading, isError } = queryResult;

  if (isLoading) {
    return {
      jsx: (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#1c1c1e',
          }}
        >
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      ),
      isLoading: true,
      isError: false,
    };
  }

  if (isError) {
    return {
      jsx: (
        <Typography
          sx={{
            color: 'red',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Error loading data!
        </Typography>
      ),
      isLoading: false,
      isError: true,
    };
  }

  return {
    jsx: null,
    isLoading: false,
    isError: false,
  };
};

export default useQueryStatus;
