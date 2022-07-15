import React from 'react'
import { Header } from '../../components'
/* import { Footer } from '../../components' */

export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <section id='hero' className="w-full py-16 px-6 flex justify-center items-center bg-violet-600 text-white sm:pl-20 sm:py-20">
        <div className='flex flex-col gap-8'>
          <strong className="w-[312px] sm:w-full text-6xl sm:text-7xl md:text-8xl text-bold font-title text-shadow">Keep sharing!</strong>
          <span className='w-[312px] sm:w-[510px] text-base sm:text-2xl font-title'>Share stories, thoughts, moments and experiences on any topic.</span>
          <a href='#' className='text-xs sm:text-base bg-slate-50 text-violet-600 w-fit p-4 rounded-2xl text-text hover:bg-slate-200 transition-colors'>Start Sharing</a>
        </div>
      </section>
      {/* <div className='h-screen'></div> */}
      {/* <Footer/> */}
    </>
  )
}
