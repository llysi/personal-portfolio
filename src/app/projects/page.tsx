import { projects } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';
import ProjectGrid from './ProjectGrid';
import Socials from '@/components/Socials';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-light font-heading text-foreground mb-4">
                        PROJECTS
                    </h1>
                    <div className="scale-75 origin-left">
                        <Socials stacked={false} />
                    </div>
                </div>

                <ProjectGrid projects={projects} layout="single" />
            </div>
        </div>
    );
}