import React from 'react'

function PageTitle({children}: {children: React.ReactNode}) {
  return (
    <h1 className="w-full text-5xl text-center font-bold text-primary-color">{ children }</h1>
  )
}

export default PageTitle
