import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight, Star } from "lucide-react";

import roughImage from "@/assets/rough.jpg";
import cluesoImage from "@/assets/clueso.jpg";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [sliderX, setSliderX] = useState(50);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(10, Math.min(90, percent));
    setSliderX(percent);
  };

  return (
    <section className="relative min-h-screen pt-28 overflow-hidden">
      {/* 🌸 Pink gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #fde7f3 0%, #ffffff 40%, #f9a8d4 70%, #ec4899 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* TEXT CONTENT */}
        <div className="max-w-4xl ml-4 md:ml-12 text-left">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6">
            <span className="text-foreground">Product videos</span>
            <br />
            <span className="text-muted-foreground font-normal">
              in minutes with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Transform raw screen recordings into stunning videos & documentation.
            No editing skills required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/demo" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* IMAGE COMPARISON SLIDER */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl select-none"
          onMouseMove={(e) =>
            isDragging.current && updateSlider(e.clientX)
          }
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
        >
          {/* LEFT IMAGE */}
          <img
            src={roughImage}
            alt="Rough Recording"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* RIGHT IMAGE (CLIPPED) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderX}%` }}
          >
            <img
              src={cluesoImage}
              alt="With Clueso"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* SLIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-pink-500 z-20 cursor-ew-resize"
            style={{ left: `${sliderX}%` }}
            onMouseDown={() => (isDragging.current = true)}
          />

          {/* SLIDER HANDLE */}
          <div
            className="absolute top-1/2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center z-30 shadow-lg cursor-ew-resize"
            style={{ left: `${sliderX}%`, transform: "translate(-50%, -50%)" }}
            onMouseDown={() => (isDragging.current = true)}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </div>

          {/* LABELS */}
          <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded text-sm font-medium">
            Rough Recording
          </div>

          <div className="absolute top-4 right-4 bg-pink-500/80 text-white px-3 py-1 rounded text-sm font-medium">
            With Clueso
          </div>
        </div>

        {/* RATING BADGE */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
            <Star className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="text-sm font-medium">
              Rated 4.9 on G2.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
