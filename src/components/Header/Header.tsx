import React from 'react'
import { Logo } from '../Logo'

export const Header: React.FC = () => {
  return (
    <header className="flex px-6 py-4 justify-between items-center h-[88px] sm:px-20">
      <a href="#">
        <Logo />
      </a>

      <nav className="flex items-center gap-8">
        <ul className="hidden sm:flex justify-center gap-8 items-center">
          <li>
            <a className="font-text font-bold underline-offset-4 decoration-2 hover:underline" href="#">Write</a>
          </li>
          <li>
            <a className="font-text font-bold underline-offset-4 decoration-2 hover:underline" href="#">Sign in</a>
          </li>
        </ul>

        <a href="#" className='text-white font-bold text-xs sm:text-base p-3 sm:px-7 sm:py-4 bg-violet-600 rounded-lg sm:rounded-2xl hover:bg-violet-900 transition-colors'>Get Started</a>
      </nav>
    </header>
  )
}
