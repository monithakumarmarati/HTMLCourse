import React from 'react'
 import navabar from '../components'


const Navabar = () => {
  return (
    <div>div className='max-w-[1400px] mt-4 mx-auto w-full flex flex-row justify-between items-center'

        <div>
          <img src="https://dev.rmahousing.com/assets/images/RMALogo1.png" alt="logo"
            className='w-20 h-15'
          />
        </div>

        <div className='flex flex-row justify-between items-center gap-5 font-bold'>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>About Us</p>
          <p className='cursor-pointer'>Services</p>
          <p className='cursor-pointer'>Products</p>
        </div>

        <div>
          <button className='h-10 w-24 cursor-pointer bg-cyan-500 rounded-full text-white font-bold'>Contact Us</button>
        </div>
      </div>

  )
}

export default Navabar