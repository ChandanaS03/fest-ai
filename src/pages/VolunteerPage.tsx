
import React from 'react';
import { RootLayout } from '@/app/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { UserCircle, ClipboardList, BarChart } from 'lucide-react';

const VolunteerPage = () => {
  return (
    <RootLayout>
      <Header />
      <main className="pt-24 pb-16 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-blue-500 mb-6">Volunteer</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {/* Create Profile */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <UserCircle className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Create Profile: Add skills and role</h3>
                </div>
              </Card>
              
              {/* Check Assigned Tasks */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Check assigned tasks</h3>
                </div>
              </Card>
              
              {/* Update Task Progress */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <BarChart className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Update Task Progress</h3>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
};

export default VolunteerPage;
