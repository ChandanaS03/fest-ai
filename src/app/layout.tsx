
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-festdark text-white">
      {children}
    </div>
  );
};

export default RootLayout;
