import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Video,
  FileText,
  Sparkles,
  Play,
  Plus,
  Eye,
} from "lucide-react";

import FeedbackForm from "@/components/feedback/FeedbackForm";
import FeedbackList from "@/components/feedback/FeedbackList";

import onboardingThumb from "/thumbnails/img1.jpg";
import salesThumb from "/thumbnails/img2.jpg";
import supportThumb from "/thumbnails/img3.jpg";
import featureThumb from "/thumbnails/img4.jpg";

export default function Dashboard() {
  // ✅ Hooks must be inside component
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  const stats = [
    { label: "Total Videos", value: "24", icon: Video, change: "+3 this week" },
    { label: "Documents", value: "18", icon: FileText, change: "+5 this week" },
    { label: "AI Enhancements", value: "156", icon: Sparkles, change: "+12 today" },
    { label: "Total Views", value: "2.4k", icon: Eye, change: "+18% vs last week" },
  ];

  const recentVideos = [
    { id: 1, title: "Product Onboarding Flow", views: 234, status: "published", createdAt: "2 hours ago", thumbnail: onboardingThumb },
    { id: 2, title: "Feature Announcement Q4", views: 156, status: "processing", createdAt: "5 hours ago", thumbnail: salesThumb },
    { id: 3, title: "Sales Demo Template", views: 89, status: "published", createdAt: "1 day ago", thumbnail: supportThumb },
    { id: 4, title: "Customer Support Guide", views: 312, status: "published", createdAt: "2 days ago", thumbnail: featureThumb },
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground p-6 space-y-8">

      {/* Welcome */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-5xl font-bold">Make something awesome</h1>
          <p className="text-muted-foreground mt-4">
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

      {/* 🔥 FEEDBACK SECTION */}
      <div className="grid md:grid-cols-2 gap-6">
        <FeedbackForm
          onSubmitFeedback={(data) =>
            setFeedbacks((prev) => [data, ...prev])
          }
        />

        <FeedbackList feedbacks={feedbacks} />
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm text-emerald-500">{stat.change}</span>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Videos */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Videos</CardTitle>
          <CardDescription>Your latest video projects</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {recentVideos.map((video) => (
            <div key={video.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="relative w-32 h-20 overflow-hidden rounded-lg">
                <img src={video.thumbnail} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
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
