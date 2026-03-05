"use client";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect } from "react";

const profileData = {
    name: "Ezra Fathurrahman",
    title: "Backend Engineer",
    description:
        "Backend Engineer specializing in scalable systems and high-performance services. Passionate about building reliable backend architectures using Golang, Kafka, and modern cloud-native tools.",
    imageUrl: "/foto-ezra.jpg",
    email: "ezrafathurrahman@gmail.com",
    linkedin: "linkedin.com/in/muhammad-ezra/",
    github: "github.com/ezrafathurrahman",
};

const projectsData = [
    {
        title: "Document AI extractor",
        description:
            "AI-powered document intelligence system that extracts structured data from unstructured documents using computer vision and OCR.",
        imageUrl: "/ocr-project.png",
        tags: ["Python", "Gemini", "React"],
    },
    {
        title: "TalentDB",
        description:
            "An AI-powered resource tracking platform for Internal team management at Phincon.",
        imageUrl: "/project-talentdb.png",
        tags: ["PHP", "Laravel", "Python", "Gemini"],
        link: "#",
    },
    {
        title: "Fiber Kubernetes Lab",
        description:
            "Production-ready Go API deployed on Kubernetes with PostgreSQL, featuring CI/CD automation via GitHub Actions, multi-environment Helm charts, and comprehensive observability.",
        imageUrl: "/api-k8s-project.jpeg",
        tags: ["Kubernetes", "Golang", "Helm", "PostgreSQL"],
        link: "#",
    },
    {
        title: "BRI Compliance Dashboard",
        description:
            "A web dashboard for Bank Rakyat Indonesia internal team to monitor running project in compliance division.",
        imageUrl: "/project-compliance.png",
        tags: ["Laravel", "MySQL", "AlpineJS"],
        link: "#",
    }
];

const experiencesData = [
    {
        role: "Software Engineer (Backend)",
        company: "PT. Phincon",
        dateRange: "2024 — Present",
        bullets: [
            "Developed backend services and API bridges for Telkomsel By.U system migration using Golang.",
            "Engineered microservices using Golang, Kafka, and PostgreSQL for internal orchestration tools.",
            "Built backend modules for TalentDB using PHP Laravel, MySQL, and Python for AI-assisted tracking.",
        ],
    },
    {
        role: "Backend Developer Intern",
        company: "PT. Phincon",
        dateRange: "2023",
        bullets: [
            "Designed and developed RESTful APIs using Java Spring Boot, integrated with PostgreSQL and Redis.",
            "Implemented automated testing suites using JUnit, Mockito, and MockMvc.",
        ],
    },
    {
        role: "Information Technology Intern",
        company: "PT. Bank Rakyat Indonesia (Persero) Tbk.",
        dateRange: "2022",
        bullets: [
            "Developed a web-based project dashboard using Laravel, AlpineJS, and MySQL for compliance monitoring.",
            "Analyzed TB+ monthly datasets and produced actionable graphical reports using SQL and Excel.",
        ],
    },
];

const skillsData = [
    "Golang",
    "Kafka",
    "Redis",
    "gRPC",
    "Docker",
    "Python",
    "Java SpringBoot",
    "PostgreSQL",
    "Git",
];

const interestsData = ["i love doing Sports, reading, and building software that can solve problems for people and business"];

const certificationsData = [
    {
        title: "Java Fundamentals",
        year: "Dicoding Indonesia, 2021",
    },
    {
        title: "Software Developer Career Preparation",
        year: "Dicoding Indonesia, 2022",
    },
    {
        title: "TOEFL ITP English Certification (Score : 593)",
        year: "Central International Education (CIE) Indonesia, 2023",
    },
];

export default function HomePage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const fadeElements = document.querySelectorAll(".fade-in, .stagger-in");
        fadeElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero
                    name={profileData.name}
                    title={profileData.title}
                    description={profileData.description}
                    imageUrl={profileData.imageUrl}
                    interests={interestsData}
                    linkedin={profileData.linkedin}
                    github={profileData.github}
                />
                <Projects projects={projectsData} />
                <Experience experiences={experiencesData} />
                <Skills skills={skillsData} />
                <Footer
                    email={profileData.email}
                    linkedin={profileData.linkedin}
                    interests={interestsData}
                    certifications={certificationsData}
                />
            </main>
        </>
    );
}
