import React from 'react'

import { ContentWrapper } from '@/app/component/ContentWrapper'
import user from '../../assests/user.jpg'
import facebook from '../../assests/facebook.svg'
import twitter from '../../assests/twitter.svg'
import insta from '../../assests/insta.svg'
import youtube from '../../assests/youtube.svg'
import Image from 'next/image'
import { Header } from '@/app/component/Header'
import { Card } from '@/app/component/Card'
import { Footer } from '@/app/component/Footer'

const Authorpage = () => {
  return (
    <>
   
    <ContentWrapper>
      <Header/>
        <div className='flex flex-col items-center justify-center dark:text-custom_text_grey_color bg-gray-100 dark:bg-custom_gray_colors px-72 gap-4 py-14 rounded-2xl mb-12'>
            <div className='flex gap-4 justify-center items-center '>
                <Image  src={user} alt="logo" width={50} height={10} className="rounded-3xl" />
                <div>
                    <p className='dark:text-white text-[16px] text-black font-semibold'>Jonathan Doe </p>
                    <p className='text-[14px]'>Collaborator & Editor</p>
                </div>
            </div>
            <p className='text-center font-sans'>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
            <div className='flex gap-1'>
              <Image src={facebook} alt="logo" width={30} height={5} className="rounded-3xl" />
              <Image src={youtube} alt="logo" width={30} height={5} className="rounded-3xl" />
              <Image src={insta} alt="logo" width={30} height={5} className="rounded-3xl" />
              <Image src={twitter} alt="logo" width={30} height={5} className="rounded-3xl" />
            </div>
        </div>
        <Card/>
    </ContentWrapper>
        <Footer/>
        </>
  )
}

export default Authorpage
