
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import { RootLayout } from './layout';

const HomePage = () => {
  return (
    <RootLayout>
      <div className="bg-festdark min-h-screen">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </RootLayout>
  );
};

export default HomePage;
