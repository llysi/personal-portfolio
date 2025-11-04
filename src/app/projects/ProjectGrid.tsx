'use client'

import { Project } from '@/app/projects/projects';
import ProjectCard from './ProjectCard';
import { useState, useEffect, useRef, Fragment } from 'react';

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
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2 + window.scrollY;
            let closestIndex = 0;
            let closestDistance = Infinity;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + window.scrollY + rect.height / 2;
                const distance = Math.abs(cardCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        // Delay initial check to ensure refs are populated
        setTimeout(handleScroll, 100);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [projects]);

    const getLayoutClasses = () => {
        switch (layout) {
            case 'single':
                return `flex flex-col gap-12 max-w-5xl mx-auto`;
            case 'grid':
                return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6`;
            case 'masonry':
                return `columns-1 md:columns-2 lg:columns-3 gap-6`;
            default:
                return `flex flex-col gap-16 max-w-5xl mx-auto`;
        }
    };

    return (
        <div className="relative">
            {/* Timeline line */}
            {/*<div className="absolute left-0 top-0 bottom-0 w-px bg-foregroundhue/50"></div>*/}

            {/* Timeline sparkles */}
            {/*{projects.map((project, index) => (
                <Fragment key={project.id}>
                    {/* Shadow/border sparkle (only for active) */}
                    {/*{activeIndex === index && (
                        <svg
                            className="absolute -left-[10px] z-10 transition-all duration-300"
                            style={{
                                top: `${index * (288 + 72) + 135}px`,
                                transform: 'scale(1.6)',
                                opacity: 0.5
                            }}
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                className="text-white"
                                d="M12 1L15 9L15 12L15 15L12 23L9 15L9 12L9 9L12 1ZM15 9L23 12L15 15ZM9 9L1 12L9 15Z"
                            />
                        </svg>
                    )}*/}
                    {/* Main sparkle */}
                    {/*<svg
                        className="absolute -left-[10px] z-10 transition-all duration-300"
                        style={{
                            top: `${index * (288 + 72) + 135}px`,
                            transform: activeIndex === index ? 'scale(1.5)' : 'scale(1)',
                            opacity: activeIndex === index ? 1 : 1
                        }}
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            className={activeIndex === index ? 'text-accent' : 'text-foregroundhue'}
                            d="M12 1L15 9L15 12L15 15L12 23L9 15L9 12L9 9L12 1ZM15 9L23 12L15 15ZM9 9L1 12L9 15Z"
                        />
                    </svg>*/}
                {/*</Fragment>
            ))}*/}

            <div className = {`${getLayoutClasses()} ${className}`}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => { cardRefs.current[index] = el }}
                        className="snap-center"
                    >
                        <ProjectCard
                            project={project}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

