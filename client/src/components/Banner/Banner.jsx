import Lottie from 'lottie-react'
import man from '../../assets/lottie/man-anim.json'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Banner = () => {

  const parentVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      }
    }
  }

  const childVarient = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <div className="screen-lg grid grid-cols-1 md:grid-cols-2 items-center mb-[120px]">
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        variants={parentVarient}
        initial="initial"
        whileInView="animate"
        className="">
        <motion.p variants={childVarient} className="font-bold text-secondary text-[60px] mb-8">We are the best agency in the world</motion.p>
        <motion.p variants={childVarient} className="text-[18px] text-secondary mb-10">
          Welcome to Brand Builders Solution. We offer comprehensive services to elevate your brand. Now featuring expert IT support for seamless operations. Join us on Facebook and let’s build your brand together!
        </motion.p>
        <motion.div variants={childVarient} className="flex gap-4">
          <Link to="/services" className=" btn hover:text-primary bg-primary py-3 px-9 text-white rounded text-[18px] ">Start a project</Link>
          <Link to="/about-us" className=" btn border border-primary py-3 px-9 text-primary rounded text-[18px] ">Learn More</Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1
          }
        }}
        className="-z-30">
        <Lottie animationData={man} />
      </motion.div>
    </div>
  )
}

export default Banner