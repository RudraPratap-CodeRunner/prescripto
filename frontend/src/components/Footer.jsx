import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section  */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* center section  */}
            <div>
                <p className='text-xl mb-5 font-medium'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right section  */}
            <div>
                <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-536-362-231</li>
                    <li>prescripto@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* copy right text  */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @Prescripto - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer