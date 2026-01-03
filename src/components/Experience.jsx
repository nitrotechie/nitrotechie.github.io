import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section-padding bg-dark-surface">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-12 text-center">
                    Experience
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8 pb-8 border-l-2 border-dark-border last:pb-0 hover:border-accent-primary transition-colors duration-300 group"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-surface group-hover:scale-125 transition-transform duration-300" />

                            <div className="bg-dark-bg border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-dark-text mb-1">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-accent-primary">
                                            <Briefcase size={18} />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-dark-muted mt-2 md:mt-0">
                                        <Calendar size={18} />
                                        <span className="text-sm">{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-dark-muted leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
