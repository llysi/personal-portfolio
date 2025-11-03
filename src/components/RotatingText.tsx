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
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
                setIsVisible(true)
            }, 500)
        }, interval)

        return () => clearInterval(timer)
    }, [phrases.length, interval])

    return (
        <span className={`inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
            {phrases[currentIndex]}
        </span>
    )
}
