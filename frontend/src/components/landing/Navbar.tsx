import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import CluesoLogo from "@/assets/clueso-logo.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={CluesoLogo}
              alt="Clueso"
              className="h-8 w-8"
            />

            <span className="text-2xl font-bold text-foreground">Clueso</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link to="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors">
              Enterprise
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/signup" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Start Free Trial
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Features
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Pricing
              </Link>
              <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Resources
              </Link>
              <Link to="/enterprise" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Enterprise
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
