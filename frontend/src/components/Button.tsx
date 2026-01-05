import React from 'react'

function Button({className, children} : {className?: string, children: React.ReactNode}) {
  const baseClases = 'px-6 py-3 font-medium border md:px-8 md:py-3 rounded-md cursor-pointer transition duration-300 delay-15'

  return (
    <button className={`${baseClases} ${className}`}>
      { children }
    </button>
  )
}

export default Button
