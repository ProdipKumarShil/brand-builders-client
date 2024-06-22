import { motion } from 'framer-motion'
import web from '../../assets/img/web.png'
import seo from '../../assets/img/seo.png'
import ux from '../../assets/img/ux.png'
import graphics from '../../assets/img/graphics.png'

const parent = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      type: 'spring',
      dumping: 1000,
      delayChildren: 0.5
    }
  }
}

const child = {
  initial: { opacity: 0, scale: 0.7, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
}

const Services = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2 }}
      transition={{
        duration: 0.5
      }}
      className="bg-primary py-[120px] bg-opacity-5">
      <div className="screen-lg mb-[72px]">
        <div className="text-center">
          <p className="font-semibold text-secondary text-[20px] mb-[20px]">Services</p>
          <p className="font-bold text-[48px] text-secondary mb-8">We Provide</p>
          <p className="text-[16px] text-[#494949]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc <br /> aliquam tincidunt est non. Viverra nec eu.</p>
        </div>
      </div>

      {/* cards */}
      <motion.div
        variants={parent}
        initial="initial"
        viewport={{ once: true, amount: 0.2 }}
        whileInView="animate"
        className="screen-lg grid grid-cols-1 md:grid-cols-4 gap-4">
        <ServiceCard childVarient={child} img={web} heading="Web Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard childVarient={child} img={seo} heading="Seo Marketing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard childVarient={child} img={ux} heading="UI/UX Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard childVarient={child} img={graphics} heading="Graphics Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </motion.div>
    </motion.div>
  )
}

export default Services

const ServiceCard = ({ img, heading, text, childVarient }) => {
  return (
    <motion.div whileHover={{ scale: 1.01, y: -10, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }} variants={childVarient} className="bg-white shadow p-2 text-center py-[58px]">
      <img className='mb-4 block mx-auto ' src={img} alt="" />
      <p className='mb-6 text-[32px] font-bold text-secondary'>{heading}</p>
      <p className='text-[14px] text-[#494949]'>{text}</p>
    </motion.div>
  )
}