import React from 'react'
import hero from '../components'

const Hero = () => {
  return (
    <div><div className='flex lg:flex-row flex-col justify-between mt-12 max-w-[1400px] mx-auto'>
        {/* left child */}
        <div className='lg:w-1/2 w-full'>
          <h1 className='lg:text-6xl text-4xl font-bold tracking-tight'>We are the best in the market currently</h1>
          <p className='lg:text-lg text-base mt-8 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cum explicabo placeat magni accusantium quas consequatur rerum iure nihil ut?</p>
          <button className='mt-8 h-16 rounded-full text-white font-semibold cursor-pointer w-40 bg-cyan-500'>Get Started Now</button>
        </div>

        {/* right child */}
        <div className='lg:w-1/2 w-full lg:mt-0 mt-8 '>
          <img
            className='rounded-4xl'
            src="https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg" alt="" />
        </div>
      </div>

</div>
  )
}

export default Hero