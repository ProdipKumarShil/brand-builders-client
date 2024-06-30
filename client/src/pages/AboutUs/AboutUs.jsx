import Lottie from "lottie-react"
import about_lottie_2 from '../../assets/lottie/about.json'
import MeetOurTeam from "../../components/MeetOurTeam/MeetOurTeam"
import MoreProject from "../../components/MoreProjects/MoreProject"
import LetsTalk from "../../components/LetsTalk/LetsTalk"
import { motion } from "framer-motion"

const AboutUs = () => {
  const parentVariant = {
    initial: {},
    animate: {
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }
  const childVariant = {
    initial: {
      opacity: 0,
      y: 50,
      x: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0
    }
  }
  return (
    <div>
      <div className='screen-lg grid grid-cols-1 md:grid-cols-2 py-[30px] items-center'>
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          className="">
          <Lottie animationData={about_lottie_2} />
        </motion.div>
        <motion.div
          variants={parentVariant}
          initial="initial"
          whileInView="animate"
          className="">
          <motion.p variants={childVariant} className='text-[20px] font-semibold text-[#333333] mb-4'>About US</motion.p>
          <motion.p variants={childVariant} className='text-[48px] font-bold text-[#333333] mb-6'>We are a creative agency</motion.p>
          <motion.p variants={childVariant} className='text-secondary mb-4'>At Brand Builders Solution, we are dedicated to empowering businesses with cutting-edge digital solutions. With a focus on innovation and excellence, we specialize in strategic marketing, SEO, creative design, web development, and reliable IT support. Our mission is to drive your success in the digital world, ensuring your brand stands out and thrives.</motion.p>
          <motion.p variants={childVariant} className='text-secondary mb-10'>Join us as we collaborate to elevate your digital presence and achieve your business goals effectively and efficiently</motion.p>
          <motion.button variants={childVariant} className="btn w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">More About Us</motion.button>
        </motion.div>
      </div>
      <MeetOurTeam />
      <MoreProject />
      <LetsTalk />
    </div>
  )
}

export default AboutUs