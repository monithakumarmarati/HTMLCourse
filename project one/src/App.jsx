
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mb-20'>

      {/* Navbar  */}
      <div className='max-w-[1400px] mt-4 mx-auto w-full flex flex-row justify-between items-center'>

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


      {/* Hero Section */}

      <div className='flex lg:flex-row flex-col justify-between mt-12 max-w-[1400px] mx-auto'>
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


      {/* Features Section */}

      <div>

        {/* Heading Section */}
        <div className='flex flex-col items-center space-y-2 mt-16 max-w-[1400px] mx-auto'>
          <p className='text-cyan-500 font-extrabold'>FEATURES</p>
          <h1 className='text-4xl font-bold'>Our Features</h1>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni ullam illum blanditiis. Eius praesentium eos animi ab inventore similique.</p>
        </div>

        {/* Grid Section */}
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1400px] mx-auto mt-8 lg:px-0 px-4'>

          {/* card 1 */}

          <div className='shadow-sm h-100'>
            <div className='h-[280px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] mt-4'>
              <h1 className='text-blue-900 font-bold text-2xl'>H-1B Professionals</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>

          {/* card 2 */}

          <div className='shadow-sm h-100'>
            <div className='h-[250px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/16475250/pexels-photo-16475250/free-photo-of-women-signing-documents.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] pt-4 pb-2 h-[150px]'>
              <h1 className='text-blue-900 font-bold text-2xl'>L-1 Intra-Company Transferees</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>


          {/* card 3 */}
          <div className='shadow-sm h-100'>
            <div className='h-[250px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] mt-4 h-[150px]'>
              <h1 className='text-blue-900 font-bold text-2xl'>H-1B Professionals</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>


          <div className='shadow-sm h-100'>
            <div className='h-[280px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] mt-4'>
              <h1 className='text-blue-900 font-bold text-2xl'>H-1B Professionals</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>


          <div className='shadow-sm h-100'>
            <div className='h-[280px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] mt-4'>
              <h1 className='text-blue-900 font-bold text-2xl'>H-1B Professionals</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>


          <div className='shadow-sm h-100'>
            <div className='h-[280px]'>
              <img
                className='h-full w-[100%]'
                src="https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className='space-y-2 pl-[20px] mt-4'>
              <h1 className='text-blue-900 font-bold text-2xl'>H-1B Professionals</h1>
              <p className='text-gray-600'>Short-term travel for tourism or leisure.</p>
              <button className='text-red-600 font-bold cursor-pointer hover:translate-y-[-8px] hover:text-blue-900 transition duration-1000'>Know More </button>
            </div>
          </div>

        </div>

      </div>


      {/* Footer Section */}

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

export default App