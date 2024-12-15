import { Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{backgroundColor: '#1c1c1e'}}>
      <Header />
      <Container maxWidth='xl'>{children}</Container>
      <Footer/>
    </div>
  );
};

export default MainLayout;
