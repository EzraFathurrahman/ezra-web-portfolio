import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for portfolio data
export interface Project {
    id: string;
    title: string;
    description: string;
    image_url: string;
    tags: string[];
    link?: string;
    sort_order: number;
    created_at: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    date_range: string;
    bullets: string[];
    sort_order: number;
    created_at: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    sort_order: number;
}

export interface Profile {
    id: string;
    name: string;
    title: string;
    description: string;
    image_url: string;
    email: string;
    linkedin: string;
    resume_url?: string;
    interests: string[];
    certifications: { title: string; year: string }[];
}
