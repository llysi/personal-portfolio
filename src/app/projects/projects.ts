export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean; //highlighting special projects
}
export const projects: Project[] = [
    {
        id: "1",
        title: "Project!",
        description: `WIP yoyoyo blah blah babaganoush hihihisdahfewughajdsuvfgywehujdsguf some descriptive text`,
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/personal-portfolio",
        liveUrl: "https://example.com/",
        featured: true
    },
    {
        id: "2",
        title: "Project 2",
        description: `WIP yoyoyo blah blah babaganoush hihihisdahfewughajdsuvfgywehujdsguf some descriptive text`,
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/personal-portfolio",
        liveUrl: "https://alysazhao.com",
        featured: false
    },
    {
        id: "3",
        title: "Project 3",
        description: `WIP yoyoyo blah blah babaganoush hihihisdahfewughajdsuvfgywehujdsguf some descriptive text`,
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/llysi/personal-portfolio",
        liveUrl: "https://alysazhao.com",
        featured: false
    }
];
