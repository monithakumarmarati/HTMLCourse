import React from 'react'
import footer from '../components'



const footer = () => {
  return (
    <div>
      <div className="bg-[#f3f4f6] pt-20 pb-20 border-b border-gray-300">
            <div className='max-w-[1400px] mx-auto grid lg:grid-cols-6 grid-cols-1 pt-20 pb-20 '>
              <div className='lg:col-span-2 col-span-1'>
                <div>
                  <h1 className='text-blue-950 text-3xl font-bold'>Mannam & <span className='text-red-600'>Associates</span></h1>
                </div>
    
                <div className="flex flex-row items-center gap-4 mt-4">
                  <img src="https://mannam-law.vercel.app/assets/georgia-G24ryLEn.jpg" alt="Mannam & Associates" className="w-8 h-8" />
                  <h1>Atlanta, Georgia, 30024</h1>
                  <p>Phone: +1 678-999-9999</p>
                </div>
    
                <div className="flex flex-row items-center gap-4 mt-4">
                  <img src="https://mannam-law.vercel.app/assets/tennessee-iAsek1KI.png" alt="Mannam & Associates" className="w-8 h-8" />
                  <h1>Chattanooga, Georgia, 30024</h1>
                  <p>Phone: +1 678-999-9999</p>
                </div>
              </div>
    
              <div className='col-span-1 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div>
                  <h1 className='text-red-600 font-bold uppercase'>practices</h1>
                </div>
    
                <ul className='text-blue-950 space-y-3 mt-4 font-semibold'>
                  <li>Employment Based Visas</li>
                  <li>Investor Based Visas</li>
                  <li>Family Based Visas</li>
                </ul>
    
              </div>
    
              <div className='col-span-1 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div>
                  <h1 className='text-red-600 font-bold uppercase'>government</h1>
                </div>
    
                <ul className='text-blue-950 space-y-3 mt-4 font-semibold'>
                  <li>Immigration Policies</li>
                  <li>Visa Applications</li>
                  <li>Family Reunification</li>
                </ul>
    
              </div>
    
    
              <div className='col-span-1 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div>
                  <h1 className='text-red-600 font-bold uppercase'>About Us</h1>
                </div>
    
                <ul className='text-blue-950 space-y-3 mt-4 font-semibold'>
                  <li>About Mannam </li>
                  <li>Contact Us</li>
                  <li>Legal Services</li>
                </ul>
    
              </div>
    
    
    
              <div className='col-span-1 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div>
                  <h1 className='text-red-600 font-bold uppercase'>legal</h1>
                </div>
    
                <ul className='text-blue-950 space-y-3 mt-4 font-semibold'>
                  <li>Immigration Law</li>
                  <li>Visa Applications</li>
                  <li>Family Reunification</li>
                </ul>
    
              </div>
    
    
    
    
    
    
            </div>
    
            <div className='flex flex-row justify-between w-[100%] max-w-[1400px] mx-auto pb-8'>
              <FaLinkedin className='w-6 h-6 text-[#0A3161]' />
              <FaFacebookF className='w-6 h-6 text-blue-500' />
              <FaInstagram className='w-6 h-6 text-blue-500' />
              <FaGoogle className='w-6 h-6 text-blue-500' />
              <FaXTwitter className='w-6 h-6 text-blue-500' />
    
    
            </div>
    
            <div className="text-center text-xs text-blue-950">
              Copyright © 2026 Mannam & Associates. All rights reserved.
            </div>
          </div>
    
    
    
        </div>
    
      )
    }
    
  

export default footer