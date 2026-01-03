import { Folder } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-padding bg-dark-bg">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-12 text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <Folder
                                    size={32}
                                    className="text-accent-primary group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h3 className="text-2xl font-semibold text-dark-text mb-3 group-hover:text-accent-primary transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-dark-muted leading-relaxed mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-dark-bg text-accent-primary text-sm rounded-md border border-dark-border font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
