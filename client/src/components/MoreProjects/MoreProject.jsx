// import { PortfolioCard } from "../../pages/Portfolio/Portfolio"
import img from '../../assets/img/houter.png'
import { motion } from "framer-motion"
import more from '../../assets/icons/read-more.svg'
import { PortfolioCard } from '../../pages/Portfolio/Portfolio'

const MoreProject = () => {
  const parentVariant = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        
      }
    }
  }
  const childVariant = {
    initial: {
      scale: 0.6,
      opacity: 0,
      x: 500,
    },
    animate: {
      scale: 1,
      opacity: 1,
      x: 0,
    }
  }
  return (
    <div className="screen-lg py-[120px]">
      <p className="text-[48px] font-bold mb-20">More Projects</p>
      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.5}}
        className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PortfolioCard childVariant={childVariant} img={img} />
        <PortfolioCard childVariant={childVariant} img={img} />
        <PortfolioCard childVariant={childVariant} img={img} />
      </motion.div>
    </div>
  )
}

export default MoreProject