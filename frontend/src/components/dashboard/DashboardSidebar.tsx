import { Link, useLocation } from 'react-router-dom';
import { 
  Play, 
  LayoutDashboard, 
  Video, 
  FileText, 
  Settings, 
  HelpCircle,
  Plus,
  ChevronLeft,
  Sparkles,
  FolderOpen,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import cluesoLogo from "@/assets/clueso-logo.svg";


const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Video, label: 'Videos', href: '/dashboard/videos' },
  { icon: FileText, label: 'Documentation', href: '/dashboard/docs' },
  { icon: FolderOpen, label: 'Projects', href: '/dashboard/projects' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: HelpCircle, label: 'Help & Support', href: '/dashboard/help' },
];

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className={cn(
        "h-16 flex items-center border-b border-sidebar-border px-4",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && (
  <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3">
    <img
      src={cluesoLogo}
      alt="Clueso logo"
      className="h-8 w-auto"
    />
    <span className="text-2xl font-semibold">
      Clueso
    </span>
  </Link>
)}

        
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Play className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
        )}

        <button
          onClick={onToggle}
          className={cn(
            "p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors text-sidebar-foreground",
            collapsed && "absolute -right-3 top-6 bg-sidebar border border-sidebar-border"
          )}
        >
          <ChevronLeft className={cn("w-4 h-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Create Button */}
      <div className="p-4">
        <Button 
          variant="hero" 
          className={cn("w-full", collapsed && "px-0")}
          asChild
        >
          <Link to="/dashboard/create">
            {collapsed ? (
              <Plus className="w-5 h-5" />
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Create New
              </>
            )}
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="px-3 py-4 border-t border-sidebar-border">
        <ul className="space-y-1">
          {bottomItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
