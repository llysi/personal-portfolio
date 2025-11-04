'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Project } from '@/app/projects/projects';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export default function ProjectCard({project, className=""}: ProjectCardProps){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`bg-card rounded-lg shadow-md overflow-hidden
        hover:shadow-lg transition-shadow flex ${className}`}>
            {/* Image container - Left side */}
            <div
                className="w-90 h-60 flex-shrink-0 p-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
                    {/* Base image */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="h-full w-auto object-cover"
                    />
                    {/* Hover image - fades in on top */}
                    {project.hoverImage && (
                        <Image
                            src={project.hoverImage}
                            alt={project.title}
                            width={500}
                            height={500}
                            className={`absolute inset-0 m-auto h-full w-auto object-cover transition-opacity duration-300 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    )}
                </div>
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