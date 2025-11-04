'use client'

import { useState, useEffect } from 'react'

interface RotatingTextProps {
    phrases: string[]
    className?: string
    interval?: number
}

export default function RotatingText({
    phrases,
    className = "",
    interval = 3000
}: RotatingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true)
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }, interval)
        return () => clearInterval(timer)
    }, [interval])

    // When we reach the duplicate (end), instantly jump back to start
    useEffect(() => {
        if (currentIndex === phrases.length) {
            setTimeout(() => {
                setIsTransitioning(false)  // Turn off transition
                setCurrentIndex(0)  // Jump to start instantly
                setTimeout(() => setIsTransitioning(true), 50)  // Turn transition back on
            }, 700)  // Wait for the scroll animation to finish
        }
    }, [currentIndex, phrases.length])

    const PHRASE_HEIGHT = 28

    return (
        //window positioned to align with text baseline
        <span
            className={`inline-block overflow-hidden max-w-full ${className}`}
            style={{
                height: `${PHRASE_HEIGHT}px`,
                verticalAlign: 'baseline',
                position: 'relative',
                top: '8px'  //push down to align better
            }}
        >
            {/* Moving strip */}
            <span
                className="block"
                style={{
                    transform: `translateY(-${currentIndex * PHRASE_HEIGHT}px)`,
                    transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none'
                }}
            >
                {/* all phrases stacked */}
                {phrases.map((phrase, index) => (
                    <span
                        key={index}
                        className="block whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ height: `${PHRASE_HEIGHT}px`, lineHeight: `${PHRASE_HEIGHT}px` }}
                    >
                        {phrase}
                    </span>
                ))}
                {/* duplicate first phrase at the end for seamless loop */}
                <span
                    className="block whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ height: `${PHRASE_HEIGHT}px`, lineHeight: `${PHRASE_HEIGHT}px` }}
                >
                    {phrases[0]}
                </span>
            </span>
        </span>
    )
}
