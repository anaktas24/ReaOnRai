import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Adress <br />PLZ CITY</p>
          <p className='text-gray-500'>Email <br />Phone number</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact