import { Box} from '@mui/material';
import React from 'react';
import { ListMovie } from './ListMovie';
import { Banner } from './Banner';

const HomePage: React.FC = () => {
  return (
    <Box>
      <div className="py-3">
      <Banner/>
      </div>
      <ListMovie />
    </Box>
  );
};

export default HomePage;
