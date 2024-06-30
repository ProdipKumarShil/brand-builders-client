import React from 'react'
import complete from '../../assets/icons/complete.svg'
import { useGetServicesQuery } from '../../redux/api/api'
import Swal from 'sweetalert2'
import deleteImg from '../../assets/icons/delete.svg'


const Dashboard = () => {
  const { data, isLoading, isError } = useGetServicesQuery()
  const completedServices = data?.services?.filter(completeService => completeService?.status === 'success')
  return (
    <div>
      <div className="flex gap-2 items-center pb-5 ">
        <img className='size-8' src={complete} alt="" />
        <p className='text-[24px] font-medium ' >Completed Service({completedServices?.length})</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Status</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              completedServices?.map(service => <TR key={service._id} service={service}  />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard

const TR = ({ service }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteService(service._id).unwrap()
          refetch()

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (error) {
          Swal.fire({
            title: "Failed!",
            text: "Your file has been deleted.",
            icon: "error"
          });
        }
      }
    });
  }
  const handleStatus = () => {
    if (service?.status === 'success') {
      return true
    } else {
      return false
    }
  }
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <div className="size-12 bg-emerald-500 flex items-center justify-center text-white text-xl font-bold"><span>{(service?.name).split('')[0]}</span></div>
            </div>
          </div>
          <div>
            <div className="font-bold">{service?.name}</div>
          </div>
        </div>
      </td>
      <td>
        {service?.email}
      </td>
      <td>{service?.service}</td>
      <td>
        <div className="flex items-center gap-2">
          {handleStatus() ? <div className="size-3 rounded-full bg-green-500"></div> : <div className="size-3 rounded-full bg-red-500"></div>}
          <div className="">{(service?.status).toUpperCase()}</div>
        </div>
      </td>
      <th>
        <button onClick={() => document.getElementById(`${service?._id}`).showModal()} className="btn btn-ghost btn-xs">details</button>
      </th>
      <th>
        <div className="flex  items-center gap-2">
          <button onClick={handleDelete} className=' p-[6px] mask btn mask-squircle bg-red-500'><img className='size-4' src={deleteImg} alt="" /></button>
        </div>
      </th>
      <dialog id={`${service?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Message from, {service?.name}</h3>
          <p className="py-4">{service?.message}</p>
        </div>
      </dialog>
    </tr>
  )
}

