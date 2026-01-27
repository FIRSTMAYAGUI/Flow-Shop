import React from 'react'

function PageTitle({children}: {children: React.ReactNode}) {
  return (
    <h1 className="w-full my-8 text-5xl uppercase tracking-wider text-center font-bold text-primary-color">{ children }</h1>
  )
}

export default PageTitle
