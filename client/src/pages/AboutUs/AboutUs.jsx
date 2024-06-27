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
          <motion.p variants={childVariant} className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, luctus sapien vulputate urna tempor euismod adipiscing massa. Volutpat nunc quis dictum consectetur egestas varius. </motion.p>
          <motion.p variants={childVariant} className='text-secondary mb-10'>Ac sagittis tellus, sodales commodo elit, sociis purus. Egestas mauris eget commodo commodo et vel fermentum ultrices.</motion.p>
          <motion.button variants={childVariant} className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">More About Us</motion.button>
        </motion.div>
      </div>
      <MeetOurTeam />
      <MoreProject />
      <LetsTalk />
    </div>
  )
}

export default AboutUs