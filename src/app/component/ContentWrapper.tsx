import React, { ReactNode } from 'react'
type contentwrapperProps = {
    children: ReactNode
}
export const ContentWrapper = ({children}:contentwrapperProps) => {
  return (
    <div className='block mx-96'>
      {children}
    </div>
  )
}
