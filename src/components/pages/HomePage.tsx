import React, { useState, useEffect } from 'react';
import MainLayout from '../templates/MainLayout';
import Hero from '../molecules/Hero';

const HomePage: React.FC = () => {


  const handleContactClick = () => {
    // Handle contact button click
    console.log('Contact clicked');
  };

  return (
    <MainLayout>
      {/* 임시 다크모드 토글 버튼 */}
      <Hero
        title="Hello, I'm a Developer"
        subtitle="I create beautiful and functional web applications with modern technologies"
        ctaText="Contact Me"
        onCtaClick={handleContactClick}
      />
    </MainLayout>
  );
};

export default HomePage;
