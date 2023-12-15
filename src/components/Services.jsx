import React from 'react';
import { servicesRowOne, servicesRowTwo, servicesRowThree, servicesRowFour, servicesRowFive } from '../constants/data';
import ServicesOnPhone from './ServicesOnPhone';

const Services = () => {
  return (
    <div className='w-full lg:h-[90vh] h-[100vh] pt-[10rem]'>
      <h1 className='text-center text-[3rem] font-[700] py-10'>
        Our Best Services
      </h1>
      <div className=" w-full  lg:flex flex-col hidden">
        <div className="flex lg:flex-nowrap flex-wrap  space-x-[1rem] justify-center mx-auto w-[80vw] gap-5">
          {servicesRowOne.map((service, index) => (
            <div key={index} className=" shadow w-full bg-white py-1  Services-shadow flex justify-center rounded-lg relative ">
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-nowrap flex-wrap mt-4  space-x-[1rem] justify-center mx-auto w-[80vw] gap-5">
          {servicesRowTwo.map((service, index) => (
            <div key={index} className=" shadow w-full bg-white py-1  Services-shadow flex justify-center rounded-lg relative ">
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-nowrap flex-wrap mt-4  space-x-[1rem] justify-center mx-auto w-[80vw] gap-5">
          {servicesRowThree.map((service, index) => (
            <div key={index} className=" shadow w-full bg-white py-1  Services-shadow flex justify-center rounded-lg relative ">
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-nowrap flex-wrap mt-4  space-x-[1rem] justify-center mx-auto w-[80vw] gap-5">
          {servicesRowFour.map((service, index) => (
            <div key={index} className=" shadow w-full bg-white py-1  Services-shadow flex justify-center rounded-lg relative ">
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        <div className="flex lg:flex-nowrap flex-wrap mt-4  space-x-[1rem] justify-center mx-auto w-[80vw] gap-5">
          {servicesRowFive.map((service, index) => (
            <div key={index} className=" shadow w-full bg-white py-1  Services-shadow flex justify-center rounded-lg relative ">
              <h2>{service}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <ServicesOnPhone />
      </div>
    </div>
  )
}

export default Services