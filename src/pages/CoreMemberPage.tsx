
import React from 'react';
import { RootLayout } from '@/app/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, FileText, Users, ClipboardList, BarChart3 } from 'lucide-react';

const CoreMemberPage = () => {
  return (
    <RootLayout>
      <Header />
      <main className="pt-24 pb-16 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-500 mb-6">Core Member</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {/* Schedule Event */}
              <Card className="bg-red-200 hover:bg-red-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Schedule Event: Hackathon</h3>
                </div>
              </Card>
              
              {/* Timeline */}
              <Card className="bg-red-100 hover:bg-red-200 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Timeline: Start - End</h3>
                </div>
              </Card>
              
              {/* Event Description */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Event Description and list tasks</h3>
                </div>
              </Card>
              
              {/* Add Volunteers */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Add Volunteers</h3>
                </div>
              </Card>
              
              {/* Track Registrations */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Track registrations: Dashboard</h3>
                </div>
              </Card>
              
              {/* Check Progress */}
              <Card className="bg-gray-200 hover:bg-gray-300 transition-colors p-6 cursor-pointer">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-gray-700" />
                  <h3 className="text-lg font-medium text-gray-800">Check Progress of event</h3>
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

export default CoreMemberPage;
