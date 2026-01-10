'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Close drawer when clicking outside or on a link
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen])

  const handleLinkClick = () => {
    setIsDrawerOpen(false)
  }

  return (
    <>
      <header className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="8" r="2" fill="#EF4444"/>
                <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <span className="font-bold text-lg hidden md:inline">Intent-Based Violence Prediction System</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about-us" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="/demo" className="hover:text-blue-400 transition-colors">Demo</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          
          {/* Desktop Login Button */}
          <div className="hidden lg:block">
            <a 
              href="/login"
              className="bg-[#008EB0] hover:bg-[#007A96] text-white px-6 py-2 rounded-full transition-colors font-medium inline-block"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isDrawerOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="8" r="2" fill="#EF4444"/>
                  <path d="M8 16C8 14 10 12 12 12C14 12 16 14 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 6L10 10M14 10L18 6M6 18L10 14M18 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="font-bold text-sm">IBVPS</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 p-6 space-y-4">
            <a
              href="/"
              onClick={handleLinkClick}
              className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about-us"
              onClick={handleLinkClick}
              className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="/services"
              onClick={handleLinkClick}
              className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Services
            </a>
            <a
              href="/demo"
              onClick={handleLinkClick}
              className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Demo
            </a>
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Drawer Footer with Login Button */}
          <div className="p-6 border-t border-gray-700">
            <a 
              href="/login" 
              onClick={handleLinkClick}
              className="w-full bg-[#008EB0] hover:bg-[#007A96] text-white px-6 py-3 rounded-full transition-colors font-medium inline-block text-center"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  )
}