export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubURL?: string;
    liveURL?: string;
    featured?: boolean //highlighting special projects
}