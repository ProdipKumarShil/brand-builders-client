import start from '../../assets/icons/star.svg'


const Testimonial = () => {
  return (
    <div className="screen-lg py-[120px]">
      <p className="font-bold text-[48px] text-black mb-6">Customer testimonials</p>
      <p className="text-[#494949] mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

    </div>
  )
}

export default Testimonial

const ReviewCard = () => {
  return (
    <div className="p-8 shadow-md rounded">
      <img className='mb-6' src={start} alt="" />
      <p className='text-[14px] text-[#494949] mb-6'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
      <div className="flex gap-5 items-center">
        <img className='w-14 h-14 object-cover rounded-full' src="https://randomuser.me/api/portraits/women/36.jpg" alt="" />
        <div className="">
          <p className='font-semibold text-[#333333]'>Chloe Franklin</p>
          <p className='text-[#494949]'>Marketing</p>
        </div>
      </div>
    </div>
  )
}