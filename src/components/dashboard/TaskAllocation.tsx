
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, RefreshCw, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const mockTasks = [
  { id: 1, task: "Set up registration desk", assigned: "Sarah Chen", skills: "Organization, Communication", priority: "High", status: "Pending" },
  { id: 2, task: "Prepare presentation slides", assigned: "Michael Johnson", skills: "Design, Content Creation", priority: "Medium", status: "In Progress" },
  { id: 3, task: "Coordinate with speakers", assigned: "Emma Wilson", skills: "Communication, Scheduling", priority: "High", status: "Completed" },
  { id: 4, task: "Set up audio equipment", assigned: "David Rodriguez", skills: "Technical, Audio", priority: "Medium", status: "Pending" },
  { id: 5, task: "Manage social media", assigned: "Unassigned", skills: "Social Media, Marketing", priority: "Low", status: "Pending" },
];

const mockVolunteers = [
  { id: 1, name: "Sarah Chen", skills: ["Organization", "Communication", "Leadership"] },
  { id: 2, name: "Michael Johnson", skills: ["Design", "Content Creation", "Photography"] },
  { id: 3, name: "Emma Wilson", skills: ["Communication", "Scheduling", "Marketing"] },
  { id: 4, name: "David Rodriguez", skills: ["Technical", "Audio", "Lighting"] },
  { id: 5, name: "Alex Thompson", skills: ["Social Media", "Marketing", "Writing"] },
];

const TaskAllocation = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [isAllocating, setIsAllocating] = useState(false);

  const handleAIAllocation = () => {
    setIsAllocating(true);
    
    // Simulate AI allocation process
    setTimeout(() => {
      const updatedTasks = [...tasks];
      
      // Example allocation logic: Assign the unassigned task to Alex based on skills match
      const unassignedTaskIndex = updatedTasks.findIndex(task => task.assigned === "Unassigned");
      if (unassignedTaskIndex !== -1) {
        updatedTasks[unassignedTaskIndex].assigned = "Alex Thompson";
      }
      
      setTasks(updatedTasks);
      setIsAllocating(false);
      
      toast({
        title: "Tasks allocated successfully",
        description: "AI has assigned tasks based on volunteer skills and availability.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Smart Task Allocation</h2>
        <Button onClick={handleAIAllocation} disabled={isAllocating}>
          {isAllocating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Allocating...
            </>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              AI Allocate Tasks
            </>
          )}
        </Button>
      </div>
      
      {/* Task List */}
      <Card>
        <CardHeader>
          <CardTitle>Event Tasks</CardTitle>
          <CardDescription>Tasks are automatically assigned based on skills and availability</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Skills Needed</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.task}</TableCell>
                  <TableCell>{task.assigned}</TableCell>
                  <TableCell>{task.skills}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs 
                      ${task.priority === "High" ? "bg-red-100 text-red-800" : 
                        task.priority === "Medium" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-blue-100 text-blue-800"}`}>
                      {task.priority}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs 
                      ${task.status === "Completed" ? "bg-green-100 text-green-800" : 
                        task.status === "In Progress" ? "bg-purple-100 text-purple-800" : 
                        "bg-gray-100 text-gray-800"}`}>
                      {task.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Volunteers and Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Volunteer Skill Matrix</CardTitle>
          <CardDescription>AI uses this information to match tasks with appropriate volunteers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockVolunteers.map((volunteer) => (
              <Card key={volunteer.id} className="bg-muted/40">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="h-8 w-8 bg-gray-200 p-1.5 rounded-full text-gray-700" />
                    <h3 className="text-lg font-medium">{volunteer.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {volunteer.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskAllocation;
