interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
    return (
        <section className="skills-section" id="about">
            <div className="container">
                <div className="skills-inner fade-in">
                    <div className="skills-left">
                        <p className="section-label">Engineering Mastery</p>
                        <h2 className="section-title">
                            <em>Technical Skills</em>
                        </h2>
                        <p className="skills-subtitle">
                            Tools and technologies I work with on a daily basis.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
