import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for trying out Clueso',
            features: [
                '5 videos per month',
                'Basic documentation',
                'Community support',
                'Watermark on videos',
            ],
            cta: 'Get Started',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$29',
            period: 'per month',
            description: 'For professional teams',
            features: [
                'Unlimited videos',
                'Advanced documentation',
                'Priority support',
                'No watermark',
                'AI voiceovers',
                'Translation (10 languages)',
                'Custom branding',
            ],
            cta: 'Start Free Trial',
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'contact us',
            description: 'For large organizations',
            features: [
                'Everything in Pro',
                'Unlimited team members',
                'Dedicated support',
                'Custom integrations',
                'SLA guarantee',
                'Advanced analytics',
                'On-premise deployment',
            ],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-6 text-gradient">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose the plan that's right for your team
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline mb-2">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                                    </div>
                                    <p className="text-muted-foreground">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/signup" className="block">
                                    <Button
                                        className={`w-full ${plan.popular
                                                ? 'bg-primary hover:bg-primary/90'
                                                : 'bg-secondary hover:bg-secondary/80'
                                            }`}
                                    >
                                        {plan.cta}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            All plans include a 14-day free trial. No credit card required.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
