import { 
  Wand2, 
  FileText, 
  Mic, 
  ZoomIn, 
  Captions, 
  Globe, 
  Palette, 
  Share2 
} from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Editing',
    description: 'Automatically remove filler words, rewrite scripts for clarity, and polish your recordings.',
  },
  {
    icon: Mic,
    title: 'AI Voiceover',
    description: 'Replace your audio with lifelike AI voices in any language. Natural and professional.',
  },
  {
    icon: ZoomIn,
    title: 'Smart Auto-Zoom',
    description: 'AI highlights key actions with intelligent zoom effects that keep viewers engaged.',
  },
  {
    icon: Captions,
    title: 'Auto Captions',
    description: 'Generate accurate captions instantly. Improve accessibility and engagement.',
  },
  {
    icon: FileText,
    title: 'Auto Documentation',
    description: 'Create step-by-step help articles and SOPs from your videos automatically.',
  },
  {
    icon: Globe,
    title: 'Global Translation',
    description: 'One-click translation for voiceovers, captions, and docs in 31+ languages.',
  },
  {
    icon: Palette,
    title: 'Brand Templates',
    description: 'Custom intros, outros, and backgrounds. Keep your brand consistent.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Download, embed, or share via link. Export in any format you need.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything you need to create
            <span className="text-gradient"> stunning content</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From raw recording to polished video in minutes. Our AI handles the heavy lifting so you can focus on what matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
