
import React from 'react';
import { RootLayout } from '@/app/layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import TaskAllocation from '@/components/dashboard/TaskAllocation';
import PhotoFinder from '@/components/dashboard/PhotoFinder';
import ReportGeneration from '@/components/dashboard/ReportGeneration';

const DashboardPage = () => {
  return (
    <RootLayout>
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-blue-500 mb-4">Event Dashboard & Analytics</h1>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasks">Task Allocation</TabsTrigger>
              <TabsTrigger value="photos">Photo Finder</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <DashboardOverview />
            </TabsContent>
            <TabsContent value="tasks">
              <TaskAllocation />
            </TabsContent>
            <TabsContent value="photos">
              <PhotoFinder />
            </TabsContent>
            <TabsContent value="reports">
              <ReportGeneration />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </RootLayout>
  );
};

export default DashboardPage;
