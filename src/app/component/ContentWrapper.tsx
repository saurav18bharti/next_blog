import React, { ReactNode } from 'react'
type contentwrapperProps = {
    children: ReactNode
}
export const ContentWrapper = ({children}:contentwrapperProps) => {
  return (
    <div className='block  lg:mx-24 2xl:mx-22rem md:mx-36'>
      {children}
    </div>
  )
}
