
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BarChart } from 'lucide-react';

const ReportGeneration = () => {
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-semibold">Event Report Generation</h2>
      
      <Card className="bg-muted/30">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Automated Event Reports</h3>
              <p className="text-muted-foreground">
                Generate comprehensive reports with key metrics and insights from your events
              </p>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate New Report
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Summary</CardTitle>
            <CardDescription>Last updated: Today at 2:30 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">246 / 300</p>
                <p className="text-sm text-muted-foreground">Attendees (82%)</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Feedback Analysis</CardTitle>
            <CardDescription>Last updated: Today at 2:30 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">4.7 / 5.0</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
            <CardDescription>Last updated: Today at 2:30 PM</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold">$24,500</p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            Download detailed reports for your events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <BarChart className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="font-medium">Tech Conference 2023 - Complete Report</p>
                  <p className="text-sm text-muted-foreground">Generated on May 15, 2023</p>
                </div>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <BarChart className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="font-medium">Design Workshop - Complete Report</p>
                  <p className="text-sm text-muted-foreground">Generated on April 3, 2023</p>
                </div>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <BarChart className="h-10 w-10 text-blue-500" />
                <div>
                  <p className="font-medium">Networking Mixer - Complete Report</p>
                  <p className="text-sm text-muted-foreground">Generated on March 22, 2023</p>
                </div>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportGeneration;
