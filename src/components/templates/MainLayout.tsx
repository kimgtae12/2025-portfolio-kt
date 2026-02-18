import React from 'react';
import Header from '../organisms/Header';
import bgImage from 'assets/images/bg-img.jpeg';
import { DockBar } from 'components/organisms/DockBar';
import { ModalProvider } from 'context/ModalContext';
import { ModalRenderer } from 'components/organisms/ModalRenderer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <ModalProvider>
        <div className="flex flex-col w-full h-full">
          <Header />
          <main className='flex-1 relative overflow-hidden'>
            <ModalRenderer />
            <DockBar />
          </main>
        </div>
      </ModalProvider>
    </div>
  );
};

export default MainLayout;
