import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export default function ProjectCard({project, className=""}: ProjectCardProps){
    return (
        <div className={`bg-card rounded-lg shadow-md overflow-hidden 
        hover:shadow-lg transition-shadow flex ${className}`}>
            {/* Image container - Left side */}
            <div className="relative w-80 h-60 flex-shrink-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content container - Right side */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-light mb-2 text-foreground font-heading">
                        {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>
                    
                    {/* Technology badges */}
                    
                    
                </div>
                
                {/* Action buttons */}
                
            </div>
        </div>
    );
}