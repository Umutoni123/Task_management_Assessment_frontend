import React from 'react'
import SSP_7251 from '../Assets/images/SSP_7251.jpeg'
import UserDetailsDropdown from './UserDetailsDropdown'
export default function Header() {
  const options = [];
  return (
    <div className='bg-[#e7f7fe] px-6 py-1 flex justify-between'>
        <div></div>
        <div className='flex gap-1'>
            <div className='pt-2'>
                Noella
            </div>
            <div>
                <img className='h-[40px] rounded-full' src={SSP_7251 } alt="SSP_7251" srcset="" />   
            </div>
            <div>
                <UserDetailsDropdown options={options} />
            </div>
        </div>
    </div>
  )
}
