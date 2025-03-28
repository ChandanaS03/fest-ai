
import React from 'react';
import { RootLayout } from '@/app/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const GuestPage = () => {
  return (
    <RootLayout>
      <Header />
      <main className="pt-24 pb-16 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold text-blue-500 mb-6">Guest</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
            {/* Events Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Past Events */}
              <Card className="bg-rose-300 p-6 min-h-[300px] flex flex-col">
                <h3 className="text-xl font-semibold mb-12 text-center">Past Events</h3>
                <div className="flex flex-col gap-4 items-center mt-auto">
                  <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 w-40">
                    Share Feedback
                  </Button>
                  <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 w-40">
                    Find me
                  </Button>
                </div>
              </Card>

              {/* Current Events */}
              <Card className="bg-rose-300 p-6 min-h-[300px] flex flex-col">
                <h3 className="text-xl font-semibold mb-12 text-center">Current Events</h3>
                <div className="flex flex-col gap-4 items-center mt-auto">
                  <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 w-40">
                    RSVP
                  </Button>
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card className="bg-rose-300 p-6 min-h-[300px] flex flex-col">
                <h3 className="text-xl font-semibold mb-12 text-center">Upcoming Events</h3>
                <div className="flex flex-col gap-4 items-center mt-auto">
                  <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 w-40">
                    Read more info
                  </Button>
                </div>
              </Card>
            </div>

            {/* Divider */}
            <div className="h-8 bg-[#3c0000] mb-12"></div>

            {/* Timeline Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-rose-300 p-4 w-60 mb-6">
                <h3 className="text-xl font-semibold">Timeline:</h3>
              </Card>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-[250px] w-0.5 bg-gray-400"></div>
                
                {/* Timeline content */}
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-400"></div>

                  {/* Round 3 */}
                  <div className="absolute top-0 right-10 flex flex-col items-center">
                    <div className="h-24"></div>
                    <div className="w-0.5 h-16 bg-gray-400"></div>
                    <Card className="bg-rose-300 p-3 w-32 text-center">
                      <span className="font-medium">Round 3</span>
                    </Card>
                  </div>

                  {/* Round 2 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="h-32"></div>
                    <div className="w-0.5 h-16 bg-gray-400"></div>
                    <Card className="bg-rose-400 p-3 w-32 text-center">
                      <span className="font-medium">Round 2</span>
                    </Card>
                  </div>

                  {/* Round 1 */}
                  <div className="absolute top-0 left-10 flex flex-col items-center">
                    <div className="h-48"></div>
                    <div className="w-0.5 h-16 bg-gray-400"></div>
                    <Card className="bg-rose-300 p-3 w-32 text-center">
                      <span className="font-medium">Round 1</span>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="h-64"></div> {/* Space for timeline content */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
};

export default GuestPage;
