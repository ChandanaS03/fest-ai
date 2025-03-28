
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, CheckSquare } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";

const mockData = [
  { month: 'Jan', attendees: 200, engagement: 65, completion: 80 },
  { month: 'Feb', attendees: 250, engagement: 59, completion: 75 },
  { month: 'Mar', attendees: 300, engagement: 80, completion: 90 },
  { month: 'Apr', attendees: 280, engagement: 81, completion: 85 },
  { month: 'May', attendees: 350, engagement: 76, completion: 88 },
  { month: 'Jun', attendees: 380, engagement: 85, completion: 95 },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-semibold">Real-time Event Overview</h2>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          title="Active Events"
          value="5"
          description="Currently running events"
          icon={<Activity className="h-5 w-5" />}
          color="text-blue-500"
        />
        <MetricCard 
          title="Total Attendees"
          value="1,250"
          description="Across all events"
          icon={<Users className="h-5 w-5" />}
          color="text-green-500"
        />
        <MetricCard 
          title="Upcoming Events"
          value="3"
          description="In the next 30 days"
          icon={<Calendar className="h-5 w-5" />}
          color="text-purple-500"
        />
        <MetricCard 
          title="Tasks Complete"
          value="87%"
          description="Average completion rate"
          icon={<CheckSquare className="h-5 w-5" />}
          color="text-orange-500"
        />
      </div>
      
      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Event Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              attendees: { color: "#3498db" },
              engagement: { color: "#2ecc71" },
              completion: { color: "#9b59b6" }
            }}
            className="h-80"
          >
            <ResponsiveContainer>
              <BarChart data={mockData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="attendees" name="Attendees" fill="var(--color-attendees)" />
                <Bar dataKey="engagement" name="Engagement %" fill="var(--color-engagement)" />
                <Bar dataKey="completion" name="Task Completion %" fill="var(--color-completion)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      
      {/* Active Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left">Event Name</th>
                  <th className="h-12 px-4 text-left">Date</th>
                  <th className="h-12 px-4 text-left">Location</th>
                  <th className="h-12 px-4 text-left">Attendees</th>
                  <th className="h-12 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4">Tech Conference</td>
                  <td className="p-4">June 15-17, 2023</td>
                  <td className="p-4">Austin Convention Center</td>
                  <td className="p-4">450 / 500</td>
                  <td className="p-4"><span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span></td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4">Hackathon 2023</td>
                  <td className="p-4">June 20-22, 2023</td>
                  <td className="p-4">Digital Campus</td>
                  <td className="p-4">320 / 400</td>
                  <td className="p-4"><span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Starting</span></td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="p-4">Product Launch</td>
                  <td className="p-4">July 1, 2023</td>
                  <td className="p-4">Main Auditorium</td>
                  <td className="p-4">180 / 250</td>
                  <td className="p-4"><span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Preparing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const MetricCard = ({ title, value, description, icon, color }: MetricCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold mt-2">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={`p-2 rounded-lg bg-muted ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardOverview;
