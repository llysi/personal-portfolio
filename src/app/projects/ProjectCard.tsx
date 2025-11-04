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
        <div className={`bg-card flex flex-col md:flex-row ${className}`}>
            {/* Image container - Top on mobile, Left on desktop */}
            <div
                className="w-full md:w-96 h-60 md:h-60 flex-shrink-0 p-4 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
            >
                <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
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

            {/* Content container - Bottom on mobile, Right on desktop */}
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-light mb-3 text-foreground font-heading">
                        {project.title}
                    </h3>
                    <p className="text-textcolor text-base leading-relaxed mb-4">
                        {project.description}
                    </p>

                    {/* Technology badges */}


                </div>

                {/* Links - bottom right */}
                <div className="flex justify-end gap-3 scale-90 origin-right">
                    {/* GitHub link */}
                    {project.githubUrl && project.showGithub && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray hover:text-foregroundhue transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                            fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                    )}
                    {/* Devpost link */}
                    {project.devpostUrl && (
                        <a
                            href={project.devpostUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray hover:text-foregroundhue transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}