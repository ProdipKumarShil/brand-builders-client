import Lottie from 'lottie-react'
import about_lottie from '../../assets/lottie/about-anim.json'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const parentVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  }

  const childVarient = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <div className='screen-lg grid grid-cols-1 md:grid-cols-2 py-[120px] items-center'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1
          }
        }}
        className="">
        <Lottie animationData={about_lottie} />
      </motion.div>
      <motion.div
        variants={parentVarient}
        viewport={{ once: true, amount: 0.2 }}
        initial='initial'
        whileInView='animate'
        className="">
        <motion.p variants={childVarient} className='text-[20px] font-semibold text-[#333333] mb-4'>About US</motion.p>
        <motion.p variants={childVarient} className='text-[48px] font-bold text-[#333333] mb-6'>We are a creative agency</motion.p>
        <motion.p variants={childVarient} className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, luctus sapien vulputate urna tempor euismod adipiscing massa. Volutpat nunc quis dictum consectetur egestas varius. </motion.p>
        <motion.p variants={childVarient} className='text-secondary mb-10'>Ac sagittis tellus, sodales commodo elit, sociis purus. Egestas mauris eget commodo commodo et vel fermentum ultrices.</motion.p>
        <motion.button variants={childVarient} className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">More About Us</motion.button>
      </motion.div>
    </div>
  )
}

export default AboutUs