
  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mb-20'>

      {/* Navbar  */}
      <div className='max-w-[100px] mt-4 mx-auto w-full flex flex-row justify-between items-center'>

        <div>
          <img src="https://dev.rmahousing.com/assets/images/RMALogo1.png" alt="logo"
            className='w-20 h-8'
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

      <div className='flex flex-row justify-between mt-12 max-w-[1400px] mx-auto'>
        {/* left child */}
        <div className='w-1/2'>
          <h1 className='text-6xl font-bold tracking-tight'>We are the best in the market currently</h1>
          <p className='text-lg mt-8 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae cum explicabo placeat magni accusantium quas consequatur rerum iure nihil ut?</p>
          <button className='mt-8 h-16 rounded-full text-white font-semibold cursor-pointer w-40 bg-cyan-500'>Get Started Now</button>
        </div>

        {/* right child */}
        <div className='w-1/2'>
          <img
            className='rounded-4xl'
            src="https://images.pexels.com/photos/10940007/pexels-photo-10940007.jpeg" alt="" />
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
        <div className='grid grid-cols-3 gap-5 max-w-[1400px] mx-auto mt-8'>

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



    </div>

  )
}

export default App
