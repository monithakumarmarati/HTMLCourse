import React from 'react'
import feature from '../components'



const feature = () => {
  return (
    <div><div>

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

</div>
  )
}

export default feature