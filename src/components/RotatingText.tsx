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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, interval)
        return () => clearInterval(timer)
    }, [phrases.length, interval])

    const PHRASE_HEIGHT = 28

    return (
        //window positioned to align with text baseline
        <span
            className={`inline-block overflow-hidden ${className}`}
            style={{
                height: `${PHRASE_HEIGHT}px`,
                verticalAlign: 'baseline', 
                position: 'relative',
                top: '8px'  //push down to alig better
            }}
        >
            {/* Moving strip */}
            <span
                className="block"
                style={{
                    transform: `translateY(-${currentIndex * PHRASE_HEIGHT}px)`,
                    transition: 'transform 0.7s ease-in-out'
                }}
            >
                {/* All phrases stacked (each 24px) */}
                {phrases.map((phrase, index) => (
                    <span
                        key={index}
                        className="block whitespace-nowrap"
                        style={{ height: `${PHRASE_HEIGHT}px`, lineHeight: `${PHRASE_HEIGHT}px` }}
                    >
                        {phrase}
                    </span>
                ))}
            </span>
        </span>
    )
}
