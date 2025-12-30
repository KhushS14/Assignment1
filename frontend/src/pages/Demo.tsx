import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Play, Calendar, CheckCircle, Mail, User, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Demo = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: 'Demo Request Received!',
            description: "We'll contact you within 24 hours to schedule your demo.",
        });

        setIsSubmitting(false);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Play className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Watch Demo & Book a Call</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6 text-gradient">
                            See Clueso in Action
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Watch how Clueso transforms raw recordings into professional videos, or book a personalized demo with our team
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Video Demo Section */}
                        <div className="space-y-6">
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-bold mb-4">Watch Product Demo</h2>
                                <p className="text-muted-foreground mb-6">
                                    See how easy it is to create professional videos with Clueso
                                </p>

                                {/* Video Player Placeholder */}
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border mb-6">
                                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

                                        <button className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Record your screen in any tool</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">AI automatically edits and enhances</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">Get professional videos in minutes</span>
                                    </div>
                                </div>
                            </div>

                            <Link to="/signup" className="block">
                                <Button variant="hero" size="lg" className="w-full">
                                    Start Free Trial
                                </Button>
                            </Link>
                        </div>

                        {/* Book Demo Form */}
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold">Book a Personalized Demo</h2>
                            </div>

                            <p className="text-muted-foreground mb-6">
                                Get a personalized walkthrough tailored to your use case
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name *</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Work Email *</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name *</Label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <Input
                                            id="company"
                                            type="text"
                                            placeholder="Acme Inc."
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell us about your use case (optional)</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="What are you looking to achieve with Clueso?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                            Submitting...
                                        </div>
                                    ) : (
                                        <>
                                            <Calendar className="w-5 h-5" />
                                            Book Demo Call
                                        </>
                                    )}
                                </Button>
                            </form>

                            <p className="text-xs text-muted-foreground mt-4 text-center">
                                We'll contact you within 24 hours to schedule your demo
                            </p>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
                        <div className="grid md:grid-cols-3 gap-8 mt-8">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Play className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-2">Video Creation</h4>
                                <p className="text-sm text-muted-foreground">
                                    How to turn raw recordings into polished videos
                                </p>
                            </div>
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-2">Best Practices</h4>
                                <p className="text-sm text-muted-foreground">
                                    Tips and tricks from our expert team
                                </p>
                            </div>
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-2">Custom Solutions</h4>
                                <p className="text-sm text-muted-foreground">
                                    How Clueso fits your specific needs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Demo;
