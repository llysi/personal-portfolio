export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    hoverImage?: string;
    technologies: string[];
    githubUrl?: string;
    devpostUrl?: string;
    liveUrl?: string;
    featured?: boolean; //highlighting special projects
    showGithub?: boolean;
}
export const projects: Project[] = [
    {
        id: "1",
        title: "Launch Pad",
        description: `A learning app that leverages Google’s Gemini API to analyze resumes, 
                identify skill gaps, and generate personalized study roadmaps with 
                automated scheduling and data visualization.`,
        image: "/projects/launchpad_title.png",
        hoverImage: "/projects/launchpad_content.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/howdyhack-25",
        devpostUrl: "https://devpost.com/software/launchpad-h6v915",
        liveUrl: "https://example.com/",
        featured: true,
        showGithub: true,
    },
    {
        id: "2",
        title: "Project 2",
        description: `WIP`,
        image: "/projects/tidal.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/personal-portfolio",
        liveUrl: "https://alysazhao.com",
        featured: false
    },
    {
        id: "3",
        title: "Project 3",
        description: `WIP`,
        image: "/projects/tidal.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/personal-portfolio",
        liveUrl: "https://alysazhao.com",
        featured: false
    }
];
