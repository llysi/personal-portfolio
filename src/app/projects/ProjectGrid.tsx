import { Project } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
    projects: Project[];
    layout?: 'single' | 'grid' | 'masonry'; //Future layout options
    className?: string;
}

export default function ProjectGrid({
    projects,
    layout='single',
    className = ""
}: ProjectGridProps) {
    
    const getLayoutClasses = () => {
        switch (layout) {
            case 'single':
                return `flex flex-col gap-8 max-w-3xl mx-auto`;
            case 'grid':
                return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6`;
            case 'masonry':
                return `columns-1 md:columns-2 lg:columns-3 gap-6`;
            default:
                return `flex flex-col gap-8 max-w-4xl mx-auto`;
        }
    };

    return (
        <div className = {`${getLayoutClasses()} ${className}`}>
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
        </div>
    );
}

