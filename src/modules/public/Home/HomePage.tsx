import { Box, Typography } from '@mui/material';
import React from 'react';
import { ListMovie } from './ListMovie';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Typography component='h1' variant='h3' fontWeight={800} mb={4}>
        Movie List
      </Typography>
      <ListMovie />
    </Box>
  );
};

export default HomePage;
