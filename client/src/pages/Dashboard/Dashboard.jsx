import React from 'react'
import man from '../../assets/icons/man.svg'

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-2 items-center pb-5 ">
        <img className='size-8' src={man} alt="" />
        <p className='text-[24px] font-medium ' >Admin Page</p>
      </div>
      <div className="flex justify-center items-center h-[90vh]">
      </div>
    </div>
  )
}

export default Dashboard

