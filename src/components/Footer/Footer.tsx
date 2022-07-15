import React from 'react'

import { Logo } from '../Logo'
import { CaretCircleUp } from 'phosphor-react'

export const Footer: React.FC = () => {
  return (
  <footer className='gap-6 sm:gap-0 flex flex-col px-6 py-4 sm:py-6 sm:px-20 items-center justify-between sm:flex-row w-screen sticky bottom-0 bg-violet-600'>
    <a href='#' >
      <Logo color='#f8fafc'/>
    </a>

    <span className='text-slate-50 font-logo text-base font-bold'>
      Developed by <a href="https://github.com/KaiqueMCR" className="underline" target="_blank" rel='noreferrer'>KaiqueMCR</a> with <a href="https://github.com/isneru" className="underline" target='_blank' rel='noreferrer'>Diogo N.</a>
    </span>

    <a href="#hero">
      <CaretCircleUp size={50} weight="fill" className='text-slate-50'/>
    </a>
  </footer>
  )
}
