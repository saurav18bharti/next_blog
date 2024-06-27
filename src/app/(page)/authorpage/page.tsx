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
import { work_sans } from '@/app/font'

const Authorpage = () => {
  return (
    <>
   
    <ContentWrapper>

        <div className={`flex flex-col items-center justify-center dark:text-custom_text_grey_color bg-gray-100 dark:bg-custom_gray_colors px-64 gap-4 py-14 rounded-2xl mb-12 font-work_sans font-normal`}>
            <div className='flex gap-4 justify-center items-center pb-2'>
                <Image  src={user} alt="logo" width={65} height={8} className="rounded-full dark:opacity-60" />
                <div>
                    <p className='dark:text-white text-[20px] text-black font-medium'>Jonathan Doe </p>
                    <p className='text-[14px] text-gray-500 dark:text-gray-400'>Collaborator & Editor</p>
                </div>
            </div>
            <p className='text-center text-[18px] text-single_post_topic_text_color leading-6 dark:text-gray-400'>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
            <div className='flex gap-1'>
              <Image src={facebook} alt="logo" width={32} height={5} className="rounded-lg" />
              <Image src={youtube} alt="logo" width={32} height={5} className="rounded-lg" />
              <Image src={insta} alt="logo" width={32} height={5} className="rounded-lg" />
              <Image src={twitter} alt="logo" width={32} height={5} className="rounded-lg" />
            </div>
        </div>
        <Card/>
    </ContentWrapper>
    <div className='-mt-10'>

   
    </div>
        </>
  )
}

export default Authorpage
