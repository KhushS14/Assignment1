import { Upload, Sparkles, SlidersHorizontal, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Record or Upload',
    description: 'Capture your screen or upload any existing recording. No perfect takes needed.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Magic',
    description: 'Our AI polishes your script, enhances visuals, and adds professional voiceover.',
    color: 'from-primary to-accent',
  },
  {
    number: '03',
    icon: SlidersHorizontal,
    title: 'Customize',
    description: 'Fine-tune the script, adjust audio, and add your brand elements.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '04',
    icon: Download,
    title: 'Export & Share',
    description: 'Download your polished video and documentation. Share anywhere.',
    color: 'from-emerald-500 to-teal-500',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            From recording to <span className="text-gradient">polished video</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform your raw footage into professional content.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow (visible on lg+) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
