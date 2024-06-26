import React, { ReactNode } from 'react'
type contentwrapperProps = {
    children: ReactNode
}
export const ContentWrapper = ({children}:contentwrapperProps) => {
  return (
    <div className='block  xl:mx-72 2xl:mx-22rem md:mx-36'>
      {children}
    </div>
  )
}
