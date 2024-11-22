import { Container } from '@mui/material';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      MainLayout
      <Container maxWidth='xl'>{children}</Container>
    </div>
  );
};

export default MainLayout;
