import React from 'react'

interface LogoProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width || '1em'}
      height={height || '1em'}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <rect width={25.714} height={60} rx={5} fill={color || '#7C3AED' }/>
    <rect x={30} width={17.143} height={60} rx={5} fill={color || '#7C3AED'}/>
    <rect x={51.429} width={8.571} height={60} rx={4.286} fill={color || '#7C3AED'}/>
    </svg>
  )
}
