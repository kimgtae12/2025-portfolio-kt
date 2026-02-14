import React from 'react';
import Header from '../organisms/Header';
import bgImage from 'assets/image/bg-img.jpeg';
import { DockBar } from 'components/organisms/DockBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <Header />
      <main>
        {children}
      </main>
      <DockBar />
    </div>
  );
};

export default MainLayout;
