const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
       {/*Hero Left Side */}
       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">WELCOME TO</p>
                </div>
                <h1 className=" poppins-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">MIGRATING MANGO</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">FOR A BETTER LIFE</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                </div>
            </div>
       </div>
       {/*Hero Right Side */}
      
    </div>
  )
}

export default Hero