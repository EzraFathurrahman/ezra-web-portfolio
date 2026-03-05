interface ExperienceItem {
    role: string;
    company: string;
    dateRange: string;
    bullets: string[];
}

interface ExperienceProps {
    experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <div className="experience-header">
                    <div className="experience-header-left">
                        <p className="section-label">Experience</p>
                        <h2 className="section-title" style={{ fontStyle: "italic", marginBottom: 0 }}>
                            Professional Experience
                        </h2>
                    </div>

                    <div className="experience-list">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <div className="experience-item-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <span className="experience-date">{exp.dateRange}</span>
                                </div>
                                <ul className="experience-bullets">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
