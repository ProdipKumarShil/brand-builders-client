import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import setting from '../../assets/icons/setting.svg'

const DashboardLayout = () => {
  return (
    <div className="h-screen">
      {/* <div className="w-full h-[10vh] bg-green-700"></div> */}
      <div className='grid grid-cols-12'>
        <div className="w-full  h-screen   col-span-2">
          <div className="flex items-center gap-4 p-5">
            <img className='size-8' src={setting} alt="" />
            <p className='font-semibold text-[26px]'>Dashboard</p>
          </div>
          <ul>
            <Link className='p-5 text-lg block hover:bg-primary hover:text-white' to='/dashboard'><li>Dashboard</li></Link>
            <Link className='p-5 text-lg block hover:bg-primary hover:text-white' to='/dashboard/services'><li>Services</li></Link>
          </ul>
        </div>

        <div className="col-span-10 bg-[#f7faff] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout