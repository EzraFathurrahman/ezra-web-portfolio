"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link?: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    const visibleCount = 3;
    const maxIndex = Math.max(0, projects.length - visibleCount);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    }, []);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }, [maxIndex]);

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="fade-in">
                    <p className="section-label">Selected Work</p>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <div className="projects-wrapper">
                    <div className="projects-slider-viewport">
                        <div
                            className="projects-slider-track"
                            style={{
                                transform: `translateX(calc(-${currentIndex} * (((100% - 2rem * 2) / 3) + 2rem)))`,
                            }}
                        >
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link || "#"}
                                    className="project-card"
                                    target={
                                        project.link && project.link !== "#"
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        project.link && project.link !== "#"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                >
                                    <div className="project-card-image">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={400}
                                            height={180}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>
                                    <div className="project-card-body">
                                        <h3 className="project-card-title">
                                            {project.title}
                                        </h3>
                                        <p className="project-card-desc">
                                            {project.description}
                                        </p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="project-tag"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="projects-nav">
                        <button
                            className="projects-nav-btn"
                            aria-label="Previous projects"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            style={{
                                opacity: currentIndex === 0 ? 0.4 : 1,
                            }}
                        >
                            &#8592;
                        </button>
                        <button
                            className="projects-nav-btn"
                            aria-label="Next projects"
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            style={{
                                opacity: currentIndex >= maxIndex ? 0.4 : 1,
                            }}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
