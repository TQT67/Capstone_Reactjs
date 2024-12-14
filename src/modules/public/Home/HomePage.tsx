import { Box, Typography } from '@mui/material';
import React from 'react';
import { ListMovie } from './ListMovie';
import { Banner } from './Banner';

const HomePage: React.FC = () => {
  return (
    <Box>
      <Typography component='h1' variant='h3' fontWeight={800} mb={4}>
        Movie List
      </Typography>
      <Banner/>
      <ListMovie />
    </Box>
  );
};

export default HomePage;
