import React from 'react';
import { recentProjects } from '../constants/data';
import ChooseUs from './ChooseUs';

const RecentProject = () => {
  return (
    <div>
      <h1 className='text-center pb-[2rem] font-[700] text-4xl'>Recent Projects</h1>
      <div className="w-full h-[100vh] lg:h-[70vh] hidden">
        <div className='flex justify-center md: gap-[17rem] md:gap-6  flex-wrap'>
          <div className='w-64 relative '>
            <img
              className='w-64 rounded-lg top-[-40%] '
              src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image-code" />

            <div className='bg-white w-64 py-[3rem] px-4 rounded-b-lg shadow-lg absolute bottom-[-150%] z-[-999] pb-4'>
              <h3 className='pt-6 font-bold text-center text-blue-700 drop-shadow'>Project One</h3>
              <p className='pt-4' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sapiente harum sequi voluptatum animi aperiam dicta possimus, aliquid rerum natus ex obcaecati soluta.
              </p>
            </div>
          </div>
          <div className='w-64 relative'>
            <img
              className='w-64 rounded-lg top-[-40%]  '
              src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image-code" />

            <div className='bg-white w-64 py-[3rem] px-4 rounded-b-lg shadow-lg p absolute bottom-[-150%] z-[-999] pb-4'>
              <h3 className='pt-6 font-bold text-center text-blue-700 drop-shadow'>Project Two</h3>
              <p className='pt-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sapiente harum sequi voluptatum animi aperiam dicta possimus, aliquid rerum natus ex obcaecati soluta.
              </p>
            </div>
          </div>
          <div className='w-64 relative'>
            <img
              className='w-64 rounded-lg top-[-40%] '
              src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image-code" />

            <div className='bg-white w-64 py-[3rem] px-4 rounded-b-lg shadow-lg p absolute bottom-[-150%] z-[-999] pb-4'>
              <h3 className='pt-6 font-bold text-center text-blue-700 drop-shadow'>Project Three</h3>
              <p className='pt-4' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sapiente harum sequi voluptatum animi aperiam dicta possimus, aliquid rerum natus ex obcaecati soluta.
              </p>
            </div>
          </div>
          <div className='w-64 relative'>
            <img
              className='w-64 rounded-lg top-[-40%] '
              src="https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image-code" />

            <div className='bg-white w-64 py-[3rem] px-4 rounded-b-lg shadow-lg p absolute bottom-[-150%] z-[-999] pb-4'>
              <h3 className='pt-6 font-bold text-center text-blue-700 drop-shadow'>Project Four</h3>
              <p className='pt-4' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sapiente harum sequi voluptatum animi aperiam dicta possimus, aliquid rerum natus ex obcaecati soluta.
              </p>
            </div>
          </div>
        </div>
        <div className='pt-[18rem] text-center flex justify-center '>
          <h1 className='bg-blue-800 py-2 px-3 drop-shadow-lg text-white cursor-pointer rounded-md'>Check our recent projects</h1>
        </div>
      </div>
    </div>
  )
}

export default RecentProject