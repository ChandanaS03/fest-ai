
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Image as ImageIcon, Tags } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const mockPhotos = [
  { id: 1, url: "/placeholder.svg", tags: ["conference", "stage", "speaker"], event: "Tech Conference 2023" },
  { id: 2, url: "/placeholder.svg", tags: ["workshop", "group", "collaboration"], event: "Design Workshop" },
  { id: 3, url: "/placeholder.svg", tags: ["networking", "people", "social"], event: "Networking Mixer" },
  { id: 4, url: "/placeholder.svg", tags: ["awards", "ceremony", "celebration"], event: "Annual Awards Gala" },
  { id: 5, url: "/placeholder.svg", tags: ["team", "volunteers", "group photo"], event: "Volunteer Recognition" },
  { id: 6, url: "/placeholder.svg", tags: ["panel", "discussion", "audience"], event: "Industry Panel Discussion" },
  { id: 7, url: "/placeholder.svg", tags: ["booth", "exhibition", "showcase"], event: "Product Exhibition" },
  { id: 8, url: "/placeholder.svg", tags: ["presentation", "slides", "seminar"], event: "Educational Seminar" },
];

const PhotoFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState(mockPhotos);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredPhotos(mockPhotos);
      } else {
        const query = searchQuery.toLowerCase();
        const results = mockPhotos.filter(photo => 
          photo.tags.some(tag => tag.toLowerCase().includes(query)) ||
          photo.event.toLowerCase().includes(query)
        );
        setFilteredPhotos(results);
        
        toast({
          title: `Found ${results.length} photos`,
          description: results.length ? "AI has identified relevant photos based on your search." : "Try a different search term.",
        });
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-semibold">AI Photo Finder</h2>
      
      {/* Search Bar */}
      <Card className="bg-muted/30">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Describe what you're looking for (e.g., 'group photos with the CEO')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? "Searching..." : <Search className="mr-2 h-4 w-4" />}
              {isSearching ? "" : "Search Photos"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Our AI can recognize people, objects, activities, and text in photos
          </p>
        </CardContent>
      </Card>
      
      {/* Photo Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Event Photo Gallery</CardTitle>
          <CardDescription>
            AI-powered search helps you find the perfect photos from your events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="space-y-2">
                <div className="aspect-square bg-muted relative overflow-hidden rounded-md">
                  <img className="absolute inset-0 h-full w-full object-cover" src={photo.url} alt={`Event photo ${photo.id}`} />
                </div>
                <div>
                  <p className="text-sm font-medium">{photo.event}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {photo.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-4 text-muted-foreground">No photos match your search criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoFinder;
