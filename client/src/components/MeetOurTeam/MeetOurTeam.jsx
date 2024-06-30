
import { motion } from 'framer-motion'

const MeetOurTeam = () => {
  const parentVariant = {
    initial: {},
    animate: {
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  }
  const childVariant = {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1,
    }
  }
  return (
    <div className="bg-primary bg-opacity-5">
      <div className="screen-lg py-[120px]">
        <div className="text-center mb-20">
          <p className="text-secondary font-semibold mb-4">Meet Our Team</p>
          <p className="text-[48px] font-bold mb-8">Our Expert Members </p>
          <p className="text-[#494949]">Meet the dedicated experts at Brand Builders Solution, <br /> committed to delivering tailored digital solutions for your success</p>
        </div>

        {/* img cards */}
        <motion.div
          variants={parentVariant}
          initial="initial"
          whileInView="animate"
          viewport={{once: true, amount: 0.5}}
          className="grid gap-4 grid-cols-1 md:grid-cols-4"
        >
          <ImgCard childVariant={childVariant} />
          <ImgCard childVariant={childVariant} />
          <ImgCard childVariant={childVariant} />
          <ImgCard childVariant={childVariant} />
        </motion.div>
      </div>
    </div>
  )
}

export default MeetOurTeam

const ImgCard = ({ childVariant }) => {
  return (
    <motion.div variants={childVariant} className="relative">
      <img className='w-full h-[380px] object-cover' src='https://res.cloudinary.com/dwhhe5dgs/image/upload/v1719737044/brandBuildersSolution/zbbyaysnahxjlpdy4f6t.png' alt="" />
      <div className="bg-white rounded-xl p-3 shadow w-[90%] absolute -bottom-[60px] left-1/2 -translate-x-1/2">
        <p className='font-bold text-[24px] text-secondary'>Brooklyn Simmons</p>
        <p className='text-[18px] text-[#494949]'>Designer</p>
      </div>
    </motion.div>
  )
}