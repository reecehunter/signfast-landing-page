'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-white shadow-sm border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='SignFast logo'
              width={32}
              height={32}
              className='mr-2 h-8 w-8'
            />
            <h1 className='text-2xl font-bold text-gray-900'>SignFast</h1>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {/* <a
                href='#features'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
              >
                Features
              </a>
              <a
                href='#about'
                className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
              >
                About
              </a> */}
              <a
                href='https://app.signfa.st'
                className='bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium transition transform hover:-translate-y-0.5'
              >
                Start For Free
              </a>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200'>
            <a
              href='#features'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              Features
            </a>
            <a
              href='#about'
              className='text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
            >
              About
            </a>
            <a
              href='https://app.signfa.st'
              className='bg-amber-600 hover:bg-amber-700 text-white block px-3 py-2 rounded-md text-base font-medium transition transform hover:-translate-y-0.5'
            >
              Start For Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
