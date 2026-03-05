import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ezra Fathurrahman — Backend Engineer",
    description:
        "Backend Engineer specializing in scalable system design and high-performance services. Expert in Golang, Java Spring, Kafka, and cloud-native infrastructure.",
    keywords: [
        "backend engineer",
        "software engineer",
        "golang",
        "java",
        "kafka",
        "portfolio",
        "Ezra Fathurrahman",
    ],
    authors: [{ name: "Ezra Fathurrahman" }],
    openGraph: {
        title: "Ezra Fathurrahman — Backend Engineer",
        description:
            "Backend Engineer specializing in scalable system design and high-performance services.",
        type: "website",
    },
    icons: {
        icon: "/favicon-ezrastudio.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
