import { Code, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
    const { skills } = portfolioData;

    const skillCategories = [
        {
            title: 'Languages',
            icon: Code,
            items: skills.languages,
            color: 'text-blue-400',
        },
        {
            title: 'Frameworks',
            icon: Server,
            items: skills.frameworks,
            color: 'text-green-400',
        },
        {
            title: 'Databases',
            icon: Database,
            items: skills.databases,
            color: 'text-purple-400',
        },
        {
            title: 'Tools',
            icon: Wrench,
            items: skills.tools,
            color: 'text-orange-400',
        },
    ];

    return (
        <section id="skills" className="section-padding bg-dark-bg">
            <div className="container-custom">
                <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-12 text-center">
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={category.title}
                                className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon size={24} className={category.color} />
                                    <h3 className="text-xl font-semibold text-dark-text">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 bg-dark-bg text-dark-muted text-sm rounded-md border border-dark-border hover:border-accent-primary hover:text-dark-text transition-colors duration-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
