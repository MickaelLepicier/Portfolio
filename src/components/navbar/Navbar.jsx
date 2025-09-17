import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const listNavbar = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Language', link: '#language' },
    { name: 'Projects', link: '#projects' }
  ]
  return (
    <header data-aos="fade-up" className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900">
          <span className="ml-3 text-3xl font-bold text-white ">Portfolio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:ml-auto text-white text-base md:mr-auto items-center justify-center">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:inline-flex items-center py-1 px-7 focus:outline-none text-base text-white border border-white hover:border-yellow-300 hover:text-yellow-300">
          <a href="#contact">Contact me</a>
        </button>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center p-2 text-white border border-white hover:border-yellow-300 rounded-md transition-all duration-200 hover:bg-white/10 active:scale-95"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-200 ${
              isOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel with smooth slide-down */}
      <div
        className={`md:hidden border-t border-gray-600/40 overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="px-5 pt-3 pb-4 text-[#000000d9] flex flex-col space-y-3">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center py-2 px-4 border border-white hover:border-yellow-300 hover:text-gray-900"
          >
            Contact me
          </a>
        </nav>
      </div>
    </header>
  )
}
