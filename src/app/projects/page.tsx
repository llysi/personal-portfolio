import { projects } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';
import ProjectGrid from './ProjectGrid';
import Socials from '@/components/Socials';

export default function ProjectsPage() {
    return (
        <div className="pt-12 pb-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light font-heading text-foreground">
                        PROJECTS
                    </h1>
                    {/*<div className="scale-75 origin-left mb--2">
                        <Socials></Socials>
                    </div>*/}
                </div>

                <ProjectGrid projects={projects} layout="single" />

                {/* More to come indicator */}
                <div className="flex justify-center items-center mt-16 mb-0">
                    <div className="flex items-center gap-3 text-textcolor/60">
                        <span className="text-2xl">✦—</span>
                        <span className="text-sm font-medium uppercase tracking-wide">more coming soon</span>
                        <span className="text-2xl">—✦</span>
                    </div>
                </div>
            </div>
        </div>
    );
}