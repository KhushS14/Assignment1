import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Video, 
  FileText, 
  Sparkles, 
  //TrendingUp, 
  //Clock, 
  Play,
  Plus,
 // ArrowUpRight,
  Eye
} from 'lucide-react';
//import AIInsights from "@/components/AIInsights";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import FeedbackList from "@/components/feedback/FeedbackList";
import onboardingThumb from "/thumbnails/img1.jpg";
import salesThumb from "/thumbnails/img2.jpg";
import supportThumb from "/thumbnails/img3.jpg";
import featureThumb from "/thumbnails/img4.jpg";











const stats = [
  { label: 'Total Videos', value: '24', icon: Video, change: '+3 this week', trend: 'up' },
  { label: 'Documents', value: '18', icon: FileText, change: '+5 this week', trend: 'up' },
  { label: 'AI Enhancements', value: '156', icon: Sparkles, change: '+12 today', trend: 'up' },
  { label: 'Total Views', value: '2.4k', icon: Eye, change: '+18% vs last week', trend: 'up' },
];

const recentVideos = [
  { id: 1, title: 'Product Onboarding Flow', duration: '3:24', views: 234, status: 'published', createdAt: '2 hours ago',thumbnail: onboardingThumb },
  { id: 2, title: 'Feature Announcement Q4', duration: '2:15', views: 156, status: 'processing', createdAt: '5 hours ago', thumbnail: salesThumb },
  { id: 3, title: 'Sales Demo Template', duration: '5:42', views: 89, status: 'published', createdAt: '1 day ago', thumbnail: supportThumb },
  { id: 4, title: 'Customer Support Guide', duration: '4:18', views: 312, status: 'published', createdAt: '2 days ago', thumbnail: featureThumb },
];

const quickActions = [
  { label: 'Record Screen', icon: Video, href: '/dashboard/create?type=record', color: 'from-blue-500 to-cyan-500' },
  { label: 'Upload Video', icon: Plus, href: '/dashboard/create?type=upload', color: 'from-primary to-accent' },
  { label: 'Create Doc', icon: FileText, href: '/dashboard/create?type=doc', color: 'from-emerald-500 to-teal-500' },
];

export default function Dashboard() {
  return (
    <div className="dark min-h-screen bg-background text-foreground p-6 space-y-8 animate-fade-in">

      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-5xl font-bold">Make something awesome</h1>
          <p className="text-l muted-foreground pt-4 mt-1">
            Create stunning product videos and docs
          </p>
        </div>

        <Button variant="hero" asChild>
          <Link to="/dashboard/create">
            <Sparkles className="w-4 h-4 mr-2" />
            Create New Video
          </Link>
        </Button>
      </div>

      {/* 🔥 AI INSIGHTS / FEEDBACK SECTION */}
     {/* 🔥 AI + FEEDBACK SECTION */}
<div className="grid md:grid-cols-2 gap-6">
  
  <FeedbackForm />
</div>

<div>
  <FeedbackList />
</div>







      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm text-emerald-500">
                  {stat.change}
                </span>
              </div>

              <div className="mt-4">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            to={action.href}
            className="relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg">{action.label}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Create and enhance content using AI
            </p>
          </Link>
        ))}
      </div>

      {/* Recent Videos */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Recent Videos</CardTitle>
          <CardDescription>Your latest video projects</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/40 transition"
            >
              <div className="relative w-32 h-20 rounded-lg overflow-hidden">
  <img
    src={video.thumbnail}
    alt={video.title}
    className="w-full h-full object-cover"
  />

  {/* Play overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <Play className="text-white w-6 h-6" />
  </div>
</div>


              <div className="flex-1">
                <h4 className="font-medium">{video.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {video.views} views • {video.createdAt}
                </p>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                {video.status}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
