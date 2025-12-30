import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { BookOpen, Video, FileText, Lightbulb, Users, Newspaper } from 'lucide-react';

const Resources = () => {
    const resourceCategories = [
        {
            icon: BookOpen,
            title: 'Documentation',
            description: 'Comprehensive guides and API references',
            link: '#',
        },
        {
            icon: Video,
            title: 'Video Tutorials',
            description: 'Step-by-step video guides',
            link: '#',
        },
        {
            icon: FileText,
            title: 'Blog',
            description: 'Latest updates and best practices',
            link: '#',
        },
        {
            icon: Lightbulb,
            title: 'Use Cases',
            description: 'Real-world examples and success stories',
            link: '#',
        },
        {
            icon: Users,
            title: 'Community',
            description: 'Join our community forum',
            link: '#',
        },
        {
            icon: Newspaper,
            title: 'Changelog',
            description: "See what's new in Clueso",
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gradient">
                            Resources & Learning
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to master Clueso
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {resourceCategories.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.link}
                                className="glass-card p-8 hover:shadow-glow transition-all duration-300 group"
                            >
                                <resource.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                                <p className="text-muted-foreground">{resource.description}</p>
                            </a>
                        ))}
                    </div>

                    <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our support team is here to help you succeed
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                to="/signup"
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all"
                            >
                                Get Started
                            </Link>
                            <a
                                href="#"
                                className="bg-secondary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-all"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Resources;
