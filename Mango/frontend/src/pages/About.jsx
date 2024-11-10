import Title from '../components/Title'
import { assets } from '../assets/assets/assets'
import NewsletterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className='break-words'>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
          <p className='break-words'>TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2</p>
          <b className='text-gray-800'>Our Mission</b>
          <p className='break-words'>TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>TEXTTEXTTEXT</b>
          <p className='text-gray-600'>TEXTTEXTTEXTTEXTTEXT</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>TEXT2TEX2TTEXT2</b>
          <p className='text-gray-600'>TEXT2TEXT2TEXT2TEXT2TEXT2</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>TEXT2TEX2TTEXT2</b>
          <p className='text-gray-600'>TEXT2TEXT2TEXT2TEXT2TEXT2</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About