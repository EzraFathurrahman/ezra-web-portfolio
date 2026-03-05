interface Certification {
    title: string;
    year: string;
}

interface FooterProps {
    email: string;
    linkedin: string;
    interests: string[];
    certifications: Certification[];
}

export default function Footer({
    email,
    linkedin,
    interests,
    certifications,
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-inner fade-in">
                    {/* Left — Certifications */}
                    <div className="footer-left">
                        <div>
                            <p className="footer-section-title">Certifications</p>
                            <div className="footer-certs">
                                {certifications.map((cert, index) => (
                                    <p key={index} className="footer-cert-item">
                                        {cert.title}
                                        <br />
                                        <span style={{ opacity: 0.5, fontSize: "0.75rem" }}>
                                            {cert.year}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — CTA Card */}
                    <div className="footer-right">
                        <div className="footer-cta">
                            <h3>Ready to collaborate?</h3>
                            <p>
                                I&apos;m currently open to new opportunities and interesting
                                projects. Let&apos;s build something exceptional together.
                            </p>
                            <a href={`mailto:${email}`} className="btn-contact">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Ezra Fathurrahman.
                    </p>
                </div>
            </div>
        </footer>
    );
}
