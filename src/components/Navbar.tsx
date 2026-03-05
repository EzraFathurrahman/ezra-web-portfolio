"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const scrollToSection = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="navbar"
            style={{
                boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.2)" : "none",
            }}
        >
            <div className="navbar-inner">
                <a
                    href="#"
                    className="navbar-logo"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <Image
                        src="/favicon-ezrastudio.png"
                        alt="EF Logo"
                        width={36}
                        height={36}
                        className="navbar-logo-image"
                    />
                </a>

                <div className="navbar-links">
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }}
                    >
                        Projects
                    </a>
                    <a
                        href="#experience"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("experience");
                        }}
                    >
                        Experience
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about");
                        }}
                    >
                        About
                    </a>
                </div>

                <div className="navbar-right">
                    <a
                        href="https://wa.me/62895800283076"
                        className="nav-contact-link"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                    >
                        Contact
                    </a>
                    <a href="https://drive.google.com/file/d/1zVfKhWUn-phZco_AkVcM_05OQbGsS-aw/view?usp=sharing" target="_blank" className="btn-resume">
                        Resume
                    </a>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        style={{
                            transform: mobileOpen ? "rotate(45deg) translate(5px,5px)" : "none",
                        }}
                    />
                    <span style={{ opacity: mobileOpen ? 0 : 1 }} />
                    <span
                        style={{
                            transform: mobileOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile overlay menu */}
            <div className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}>
                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("projects");
                    }}
                >
                    Projects
                </a>
                <a
                    href="#experience"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("experience");
                    }}
                >
                    Experience
                </a>
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                    }}
                >
                    About
                </a>
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                    }}
                >
                    Contact
                </a>
                <a href="/resume.pdf" target="_blank" className="btn-resume">
                    Resume
                </a>
            </div>
        </nav>
    );
}
