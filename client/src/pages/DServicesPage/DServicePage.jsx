import React from 'react'
import services from '../../assets/icons/services.svg'
import { useDeleteServiceMutation, useGetServicesQuery } from '../../redux/api/api'
import deleteImg from '../../assets/icons/delete.svg'
import Swal from 'sweetalert2'
import moment from 'moment'

const DServicePage = () => {
  const { isLoading, data, error, refetch } = useGetServicesQuery()
  if (isLoading){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <div className=''>
      <div className="flex gap-2 items-center pb-5">
        <img className='size-8' src={services} alt="" />
        <p className='text-[24px] font-medium ' >Service Page {data?.count}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Service</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.services?.map(service => <TH key={service._id} service={service} refetch={refetch} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DServicePage

const TH = ({ service, refetch }) => {
  const [deleteService] = useDeleteServiceMutation()
  console.log((service?.name).split('')[0])
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
      <td>{moment(service?.date).format('MMMM Do YYYY')}</td>
      <td>{service?.service}</td>
      <th>
        <button onClick={() => document.getElementById(`${service?._id}`).showModal()} className="btn btn-ghost btn-xs">details</button>
      </th>
      <th>
        <button onClick={handleDelete} className=' p-2 mask btn mask-squircle bg-red-500'><img className='size-5' src={deleteImg} alt="" /></button>
      </th>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id={`${service?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Message from, {service?.name}</h3>
          <p className="py-4">{service?.message}</p>
        </div>
      </dialog>
    </tr>
  )
}