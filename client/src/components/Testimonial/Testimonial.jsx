import start from '../../assets/icons/star.svg'
import { motion } from 'framer-motion'

const Testimonial = () => {

  const parentVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const childVarient = {
    initial: {
      opacity: 0,
      x: 100,
      y: 100,
      scale: 0.8,
      rotate: 45
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0
    }
  }

  return (
    <div className="screen-lg py-[120px]">
      <p className="font-bold text-[48px] text-black mb-6">Customer testimonials</p>
      <p className="text-[#494949] mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Review cards */}
      <motion.div
        variants={parentVarient}
        viewport={{once: true, amount: 0.4}}
        initial='initial'
        whileInView='animate'
        className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-y-hidden">
        <ReviewCard childVarient={childVarient} />
        <ReviewCard childVarient={childVarient} />
        <ReviewCard childVarient={childVarient} />
      </motion.div>

    </div>
  )
}

export default Testimonial

const ReviewCard = ({ childVarient }) => {
  return (
    <motion.div variants={childVarient} className="p-8 shadow-md rounded">
      <img className='mb-6' src={start} alt="" />
      <p className='text-[14px] text-[#494949] mb-6'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
      <div className="flex gap-5 items-center">
        <img className='w-14 h-14 object-cover rounded-full' src="https://randomuser.me/api/portraits/women/36.jpg" alt="" />
        <div className="">
          <p className='font-semibold text-[#333333]'>Chloe Franklin</p>
          <p className='text-[#494949]'>Marketing</p>
        </div>
      </div>
    </motion.div>
  )
}