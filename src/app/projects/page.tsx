import { projects } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';
import ProjectGrid from './ProjectGrid';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-light text-center mb-12 font-heading text-foreground">
                    Projects
                </h1>

                <ProjectGrid projects={projects} layout="single" />
            </div>
        </div>
    );
}