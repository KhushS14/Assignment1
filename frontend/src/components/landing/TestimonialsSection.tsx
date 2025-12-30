import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Clueso has empowered our product team to create high-quality videos and training content 20x faster.",
    author: "Sean O'Donnell",
    role: "Director of Product Management",
    company: "Podium",
    rating: 5,
  },
  {
    quote: "Clueso's AI helps us quickly deliver clear, targeted training content. It has been a game-changer for supporting our teams.",
    author: "Daniel Wood",
    role: "Director of Learning & Development",
    company: "Sonova",
    rating: 5,
  },
  {
    quote: "Clueso cut our production time from two days to just two hours, while enhancing overall video quality.",
    author: "Janice Weintraub",
    role: "Associate Director, Customer Education",
    company: "Intuit",
    rating: 5,
  },
  {
    quote: "With Clueso, we created and launched 8 training courses for our new editor in just one quarter.",
    author: "Cyrus Dorosti",
    role: "VP of Customer Success",
    company: "Duda",
    rating: 5,
  },
  {
    quote: "Clueso transformed video creation—freeing up our experts and enabling high-quality production across the team.",
    author: "Adam Avramescu",
    role: "VP - Scaled Customer Experience",
    company: "Slack",
    rating: 5,
  },
  {
    quote: "We got Clueso for customer training videos—soon saw it scale beautifully for internal employee training too.",
    author: "Hillary Deal",
    role: "Director of Product Training",
    company: "Outreach",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Loved by <span className="text-gradient">industry leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how teams are transforming their content creation with Clueso.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-4 text-6xl font-serif text-muted/30 leading-none select-none group-hover:text-primary/20 transition-colors">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
