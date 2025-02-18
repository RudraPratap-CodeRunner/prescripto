import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData,setUserData] = useState({
    name:"Edward Vincet",
    image:assets.profile_pic,
    email:"richardjameswap@gmail.com",
    phone:"+1 234 567 890",
    address:{
      line1:"57th Cross, Richmond",
      line2:"Circle, Church Road London"
    },
    gender:"Male",
    dob:'2000-01-01'
  })

  const [isEdit,setIsEdit] = useState(false)

  return (
    <div className=' flex flex-col items-center justify-center  h-screen  gap-2 text-sm mt-10'>
      <img className='w-36 mt-12 lg:mt-4 rounded-full' src={userData.image} alt="" />
      
      {
        isEdit 
        ? <input className='bg-gray-100 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
        : <p className='text-3xl font-medium text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1.2px] border-none w-[80vw] sm:w-1/2' />
      <div>
        <p className='text-neutral-500 underline mt-3 text-center'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit 
            ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />
            : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ? <p>
              <input className='bg-gray-100' type="text" name="" id="" />
              <br />
              <input className='bg-gray-100' type="text" name="" id="" />
            </p>
            :<p className='text-gray-500'>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3 text-center'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 text-center'>
          <p className='font-medium'>Gender:</p>
          {
        isEdit 
        ? <select className='bg-gray-100 max-w-20' value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        : <p className='text-gray-400'>{userData.gender}</p>
        }
        <p className='font-medium'>Birthday:</p>
        {
          isEdit 
          ?<input className='max-w-28 bg-gray-100' type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}></input>
          :<p className='text-gray-400'>{userData.dob}</p>
        }
        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile