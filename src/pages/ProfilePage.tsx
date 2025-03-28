
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RootLayout } from '@/app/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { User, Users } from 'lucide-react';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <RootLayout>
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-blue-500 mb-4">User Profile</h1>
          
          <div className="border border-blue-500 rounded-lg overflow-hidden">
            <div className="p-8 bg-[#222] min-h-[500px]">
              <h2 className="text-2xl text-white text-center mb-12">Sign in as:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <UserTypeCard 
                  type="Core Member" 
                  icon={<Users className="h-8 w-8" />} 
                  onClick={() => navigate('/core-member')}
                />
                <UserTypeCard 
                  type="Volunteer" 
                  icon={<User className="h-8 w-8" />}
                  onClick={() => navigate('/volunteer')}
                />
                <UserTypeCard 
                  type="Guest" 
                  icon={<User className="h-8 w-8" />} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
};

interface UserTypeCardProps {
  type: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const UserTypeCard = ({ type, icon, onClick }: UserTypeCardProps) => {
  return (
    <Card 
      className="bg-festgray hover:bg-white transition-colors duration-300 cursor-pointer h-48 flex flex-col items-center justify-center"
      onClick={onClick || (() => console.log(`Selected ${type}`))}
    >
      <div className="flex flex-col items-center gap-4">
        {icon}
        <h3 className="text-xl font-medium text-black">{type}</h3>
      </div>
    </Card>
  );
};

export default ProfilePage;
