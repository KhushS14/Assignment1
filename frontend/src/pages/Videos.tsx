import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Play, 
  MoreVertical,
  Eye,
  Clock,
  Sparkles,
  Plus
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const videos = [
  { 
    id: 1, 
    title: 'Product Onboarding Flow', 
    thumbnail: '/thumbnails/img1.jpg',
    duration: '3:24', 
    views: 234, 
    status: 'published', 
    createdAt: '2 hours ago',
    enhanced: true
  },
  { 
    id: 2, 
    title: 'Feature Announcement Q4', 
    thumbnail: '/thumbnails/img2.jpg',
    duration: '2:15', 
    views: 156, 
    status: 'processing', 
    createdAt: '5 hours ago',
    enhanced: true
  },
  { 
    id: 3, 
    title: 'Sales Demo Template', 
    thumbnail:'/thumbnails/img3.jpg',
    duration: '5:42', 
    views: 89, 
    status: 'published', 
    createdAt: '1 day ago',
    enhanced: true
  },
  { 
    id: 4, 
    title: 'Customer Support Guide', 
    thumbnail: '/thumbnails/img4.jpg',
    duration: '4:18', 
    views: 312, 
    status: 'published', 
    createdAt: '2 days ago',
    enhanced: false
  },
  { 
    id: 5, 
    title: 'API Integration Tutorial', 
    thumbnail: '/thumbnails/img5.jpg',
    duration: '8:32', 
    views: 567, 
    status: 'published', 
    createdAt: '3 days ago',
    enhanced: true
  },
  { 
    id: 6, 
    title: 'Team Onboarding - Week 1', 
    thumbnail: '/thumbnails/img6.jpg',
    duration: '12:45', 
    views: 123, 
    status: 'draft', 
    createdAt: '5 days ago',
    enhanced: false
  },
];

export default function Videos() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Videos</h1>
          <p className="text-muted-foreground">Manage and organize your video projects</p>
        </div>
        <Button variant="hero" asChild>
          <Link to="/dashboard/create">
            <Plus className="w-4 h-4 mr-2" />
            New Video
          </Link>
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search videos..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="flex items-center border border-border rounded-lg p-1">
            <button
              className={cn(
                "p-1.5 rounded transition-colors",
                viewMode === 'grid' ? 'bg-muted' : 'hover:bg-muted/50'
              )}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              className={cn(
                "p-1.5 rounded transition-colors",
                viewMode === 'list' ? 'bg-muted' : 'hover:bg-muted/50'
              )}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Videos Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-lg transition-all overflow-hidden">
              {/* Thumbnail */}
             <div className="relative aspect-video bg-muted overflow-hidden">
  {video.thumbnail ? (
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full h-full object-cover"
    />
  ) : null}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-background fill-current" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-foreground/80 text-background text-xs rounded">
                  {video.duration}
                </div>
                {/* AI Badge */}
                {video.enhanced && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    AI Enhanced
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{video.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {video.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {video.createdAt}
                      </span>
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Status Badge */}
                <div className="mt-3">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    video.status === 'published' && 'bg-emerald-500/10 text-emerald-600',
                    video.status === 'processing' && 'bg-yellow-500/10 text-yellow-600',
                    video.status === 'draft' && 'bg-muted text-muted-foreground'
                  )}>
                    {video.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredVideos.map((video) => (
            <div 
              key={video.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
            >
              {/* Thumbnail */}
              <div className="relative w-40 h-24 rounded-lg bg-muted shrink-0 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-foreground/80 text-background text-xs rounded">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium truncate">{video.title}</h3>
                  {video.enhanced && (
                    <span className="px-1.5 py-0.5 bg-primary/10 text-primary text-xs rounded flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      AI
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.createdAt}
                  </span>
                </div>
              </div>

              {/* Status */}
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                video.status === 'published' && 'bg-emerald-500/10 text-emerald-600',
                video.status === 'processing' && 'bg-yellow-500/10 text-yellow-600',
                video.status === 'draft' && 'bg-muted text-muted-foreground'
              )}>
                {video.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
            <Play className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-medium mb-1">No videos found</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {searchQuery ? 'Try a different search term' : 'Get started by creating your first video'}
          </p>
          {!searchQuery && (
            <Button variant="hero" asChild>
              <Link to="/dashboard/create">
                <Plus className="w-4 h-4 mr-2" />
                Create Video
              </Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
