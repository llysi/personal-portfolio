'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState, useEffect} from 'react'


export default function Navbar() {

  const pathname = usePathname()

  //Mobile Menu Panel [state, updater function]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(true)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  /*
  //Check if a link is active
  const isActive = (href: string) => {
    return pathname === href
  }
  */

  //Toggle hamburger (with animation)
  const toggleMobileMenu = () => {
    setShouldAnimate(true)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  //Close mobile menu instantly (for link clicks)
  const closeMobileMenu = () => {
    setShouldAnimate(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="top-0 z-50 bg-background relative">
      <div className="px-2 h-18 flex justify-between items-center font-light">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className={`relative w-7 h-7 transition-all duration-200 origin-center ${isLogoHovered ? 'scale-115 drop-shadow-[0_0_12px_rgba(255,255,255,1)]' : 'scale-100'}`}>
            {/* Base logo */}
            <Image
              src="/logo_bwt.svg"
              alt="Alysa Zhao"
              width={28}
              height={28}
              className={`transition-opacity duration-300 ${isLogoHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Hover logo */}
            <Image
              src="/logo_bb.svg"
              alt="Alysa Zhao"
              width={28}
              height={28}
              className={`absolute inset-0 transition-opacity duration-300 ${isLogoHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <span className={`text-lg transition-colors font-heading ${isLogoHovered ? 'text-accent' : 'text-foreground'}`}>
            ALYSA
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8 font-heading">
            {/* Conditional styling based on isActive */}
          <Link href="/projects" 
            className={`text-foreground hover:text-accent transition-colors`}>
            PROJECTS
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className={`text-foreground hover:text-accent transition-colors`}>
            RESUME
          </a>
          <Link href="/art-extra" className={`text-foreground hover:text-accent transition-colors`}>
            ART<span className={'italic'}>++</span>
          </Link>
        </div>

        {/* Hamburger button (only shows on mobile) */}
        <button className="md:hidden cursor-pointer" onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-foreground"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu panel*/}
      <div
        id="mobile-menu"
        style={{ backgroundColor: '#f9f7f7' }}
        className={`md:hidden border-t border-foreground/10 absolute left-0 right-0 z-40 font-heading overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-60 transition-all duration-500 ease-in-out'
            : shouldAnimate
              ? 'max-h-0 transition-all duration-500 ease-in-out'
              : 'max-h-0 transition-none'
        }`}
      >
          <div className="px-4 py-2 space-y-2">
            <Link href="/projects" className={`block py-2 text-foreground hover:text-accent transition-colors`} onClick={closeMobileMenu}>
            PROJECTS
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              onClick={closeMobileMenu}
            >
              RESUME
            </a>
            <Link href="/art-extra" className={`block py-2 text-foreground hover:text-accent transition-colors`} onClick={closeMobileMenu}>
              ART++
            </Link>
          </div>
        </div>      
    </nav>
  )
}