import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Videos from "./pages/Videos";
import CreateVideo from "./pages/CreateVideo";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Enterprise from "./pages/Enterprise";
import Demo from "./pages/Demo";
//import { DashboardLayout } from "./layouts/DashboardLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";

import NotFound from "./pages/NotFound";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//
//import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="videos" element={<Videos />} />
              <Route path="create" element={<CreateVideo />} />
              <Route path="docs" element={<Dashboard />} />
              <Route path="projects" element={<Dashboard />} />
              <Route path="analytics" element={<Dashboard />} />
              <Route path="settings" element={<Dashboard />} />
              <Route path="help" element={<Dashboard />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
