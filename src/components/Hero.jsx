import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
    const { personalInfo } = portfolioData;

    return (
        <section id="hero" className="section-padding min-h-screen flex items-center bg-gradient-to-b from-dark-bg to-dark-surface">
            <div className="container-custom w-full">
                <div className="max-w-4xl mx-auto text-center animate-slide-up">
                    {/* Name and Role */}
                    <h1 className="text-5xl md:text-7xl font-bold text-dark-text mb-4">
                        {personalInfo.name}
                    </h1>
                    <p className="text-2xl md:text-3xl text-accent-primary font-semibold mb-6">
                        {personalInfo.role}
                    </p>

                    {/* Location */}
                    <div className="flex items-center justify-center gap-2 text-dark-muted mb-8">
                        <MapPin size={18} />
                        <span>{personalInfo.location}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-lg text-dark-muted leading-relaxed mb-10 max-w-3xl mx-auto">
                        {personalInfo.summary}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button
                            onClick={onOpenResume}
                            className="flex items-center gap-2 px-8 py-4 bg-accent-primary hover:bg-accent-hover text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <FileText size={20} />
                            View Resume
                        </button>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-4 bg-dark-surface hover:bg-dark-border text-dark-text rounded-lg font-semibold transition-all duration-200 border border-dark-border"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-dark-muted">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center gap-2 hover:text-accent-primary transition-colors duration-200"
                        >
                            <Mail size={18} />
                            <span className="text-sm">{personalInfo.email}</span>
                        </a>
                        <a
                            href={`tel:${personalInfo.phone}`}
                            className="flex items-center gap-2 hover:text-accent-primary transition-colors duration-200"
                        >
                            <Phone size={18} />
                            <span className="text-sm">{personalInfo.phone}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
