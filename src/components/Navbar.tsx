'use client'

import Image from 'next/image'
import Link from 'next/link'
// import {usePathname} from 'next/navigation'
import {useState} from 'react'


export default function Navbar() {

  // const pathname = usePathname()

  //Mobile Menu Panel [state, updater function]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /* 
  //Check if a link is active
  const isActive = (href: string) => {
    return pathname === href
  } 
  */

  //Toggle hamburger
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50">
      <div className="px-2 h-18 flex justify-between items-center font-light">

        {/* Logo */}
        <Link href="/" className = "flex items-center gap-2">
          {/*<Image 
            src = "/flower3.svg"
            alt="Alysa Zhao"
            width={40}
            height={40}
          />*/}
          <span className="text-lg text-foreground hover:text-accent transition-colors font-heading">
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
        <button className="md:hidden" onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-foreground"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
            <span className="block w-full h-0.5 bg-foreground"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu panel*/}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border-t border-foreground/10 absolute left-0 right-0 font-heading">
          <div className="px-4 py-2 space-y-2">
            <Link href="/projects" className={`block py-2 text-foreground hover:text-accent transition-colors`}>
            Projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-foreground hover:text-accent transition-colors"
            >
              Resume
            </a>
            <Link href="/art-extra" className={`block py-2 text-foreground hover:text-accent transition-colors`}>
              Art/Extra
            </Link>
          </div>
        </div>
      )}      
    </nav>
  )
}