import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Video, FileText, Languages, Mic, Presentation, Sparkles } from 'lucide-react';

const Features = () => {
    const capabilities = [
        {
            icon: Video,
            title: 'Videos',
            description: 'Studio style videos for any product',
        },
        {
            icon: FileText,
            title: 'Documentation',
            description: 'Step by step articles with screenshots',
        },
    ];

    const features = [
        {
            icon: Languages,
            title: 'Translate',
            description: 'Translate your videos and docs',
        },
        {
            icon: Mic,
            title: 'AI Voiceovers',
            description: 'Translate your videos and docs',
        },
        {
            icon: Presentation,
            title: 'Slides to video',
            description: 'Convert static slides into videos',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gradient">
                            Powerful Features for Modern Teams
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to create professional documentation and videos in seconds
                        </p>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">Capabilities</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {capabilities.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                                >
                                    <item.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold mb-8">Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                                >
                                    <item.icon className="w-12 h-12 text-accent mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
                        <Sparkles className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Join thousands of teams creating better documentation
                        </p>
                        <Link
                            to="/signup"
                            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                        >
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Features;
