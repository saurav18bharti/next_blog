import Image from 'next/image'
import React from 'react'

export const Card = ({id,image}:{id:number,image:string }) => {
  return (
    <div className='card_container flex flex-col gap-3 w-72 border rounded-lg p-2 border-gray-700 ' key={id}>
        <Image src={image} alt="logo" width={600} height={80} className="rounded-lg" />
        <p className='dark:text-technology_text_color text-[10px] py-1 px-2 bg-gray-900 w-fit rounded-sm'>Technology</p>
        <p className='dark:text-white'>The Impact of Technology on the Workplace: How Technology is Changing</p>
        <span className="flex items-center dark:text-custom_text_grey_color gap-3 text-[14px] pb-2">
                <Image src={image} alt="logo" width={40} height={100} className="rounded-3xl h-10" />
                <p>Delta4 InfoTech</p>
                <p>25 June ,2024</p>
            </span>

    </div>
  )
}
