'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

export default function Navbar() {

  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  //Check if a link is active
  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className ="bg-background border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className ="text-xl font-bold text-foreground">
          Alysa Zhao
        </Link>
        
        {/* TODO: Desktop Navigation - wrap your links in a div with hidden md:flex */}
        {/* TODO: For each link, add conditional styling based on isActive */}
        <Link href="/projects" className={isActive("/projects") ? "text-yellow-500" :
  "text-foreground"}>
          Projects
        </Link>
        <Link href="/resume" className={isActive("/resume") ? "text-yellow-500" :
  "text-foreground"}>
          Resume
        </Link>
        <Link href="/art-extra" className={isActive("/art-extra") ? "text-yellow-500" :
  "text-foreground"}>
          Art/Extra
        </Link>

        {/* TODO: Mobile hamburger button - only show on mobile (md:hidden) */}
        {/* TODO: Add onClick handler to toggle mobile menu */}
        {/* TODO: Add ARIA attributes: aria-expanded, aria-controls, aria-label */}
      </div>

      {/* TODO: Mobile menu - conditional rendering based on isOpen state */}
      {/* TODO: Add proper ARIA attributes and semantic HTML */}
      {/* TODO: Style with absolute positioning and smooth animations */}
      
    </nav>
  )
}