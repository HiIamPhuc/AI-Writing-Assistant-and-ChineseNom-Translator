import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';

const HomeLayout: React.FC = () => {
  return (
    <div className="bg-hero-gradient min-h-screen">
      <Hero />
    </div>
  );
};

export default HomeLayout;