import { projects } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';
import ProjectGrid from './ProjectGrid';
import Socials from '@/components/Socials';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-12 pb-52 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-6xl font-light font-heading text-foreground mb-2">
                        PROJECTS
                    </h1>
                    {/*<div className="scale-75 origin-left mb--2">
                        <Socials></Socials>
                    </div>*/}
                </div>

                <div className="pl-12 ml-8">
                    <ProjectGrid projects={projects} layout="single" />
                </div>
            </div>
        </div>
    );
}