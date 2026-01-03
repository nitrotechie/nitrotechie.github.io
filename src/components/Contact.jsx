import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
    const { personalInfo } = portfolioData;

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
        },
        {
            icon: Phone,
            label: 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: personalInfo.location,
            href: null,
        },
    ];

    return (
        <section id="contact" className="section-padding bg-dark-surface">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6 text-center">
                    Get In Touch
                </h2>
                <p className="text-dark-muted text-center mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactMethods.map((method) => {
                            const Icon = method.icon;
                            const content = (
                                <div className="bg-dark-bg border border-dark-border rounded-lg p-6 text-center hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon
                                        size={32}
                                        className="text-accent-primary mx-auto mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-dark-text mb-2">
                                        {method.label}
                                    </h3>
                                    <p className="text-dark-muted break-all">{method.value}</p>
                                </div>
                            );

                            return method.href ? (
                                <a key={method.label} href={method.href}>
                                    {content}
                                </a>
                            ) : (
                                <div key={method.label}>{content}</div>
                            );
                        })}
                    </div>

                    {/* Social Links */}
                    <div className="text-center">
                        <p className="text-dark-muted mb-6">Connect with me on social media</p>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#"
                                className="p-3 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary hover:bg-dark-border transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github size={24} className="text-dark-muted hover:text-dark-text" />
                            </a>
                            <a
                                href="#"
                                className="p-3 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary hover:bg-dark-border transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} className="text-dark-muted hover:text-dark-text" />
                            </a>
                            <a
                                href="#"
                                className="p-3 bg-dark-bg border border-dark-border rounded-lg hover:border-accent-primary hover:bg-dark-border transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter size={24} className="text-dark-muted hover:text-dark-text" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-dark-border text-center">
                    <p className="text-dark-muted text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
