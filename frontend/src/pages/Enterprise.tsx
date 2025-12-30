import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Shield, Users, Zap, Lock, BarChart, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Enterprise = () => {
    const features = [
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'SOC 2 compliant with advanced security features and SSO integration',
        },
        {
            icon: Users,
            title: 'Unlimited Team Members',
            description: 'Scale your team without limits. Add as many users as you need',
        },
        {
            icon: Zap,
            title: 'Priority Performance',
            description: 'Dedicated infrastructure for maximum speed and reliability',
        },
        {
            icon: Lock,
            title: 'On-Premise Deployment',
            description: 'Deploy Clueso on your own infrastructure for complete control',
        },
        {
            icon: BarChart,
            title: 'Advanced Analytics',
            description: 'Deep insights into usage, performance, and team productivity',
        },
        {
            icon: Headphones,
            title: 'Dedicated Support',
            description: '24/7 priority support with dedicated account manager',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gradient">
                            Enterprise Solutions
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Built for large organizations with advanced security and compliance needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 hover:shadow-glow transition-all duration-300"
                            >
                                <feature.icon className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-primary rounded-2xl p-12 text-white mb-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Custom Solutions for Your Organization</h2>
                            <p className="text-lg mb-8 opacity-90">
                                We work with you to create a tailored solution that meets your specific needs
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button
                                    className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
                                >
                                    Schedule a Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                                >
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
                            <p className="text-muted-foreground mb-6">
                                Join hundreds of enterprise customers who trust Clueso for their documentation needs
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <span>Fortune 500 companies</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <span>Government agencies</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <span>Healthcare organizations</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <span>Financial institutions</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold mb-4">Compliance & Certifications</h3>
                            <p className="text-muted-foreground mb-6">
                                We meet the highest standards for security and compliance
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span>SOC 2 Type II certified</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span>GDPR compliant</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span>HIPAA compliant</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span>ISO 27001 certified</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Enterprise;
