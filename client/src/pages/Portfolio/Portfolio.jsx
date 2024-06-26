import more from '../../assets/icons/read-more.svg'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <div>
      <div className="bg-primary py-[120px] text-center pb-20">
        <p className="font-bold text-white text-[60px] mb-5">Our Portfolio</p>
        <p className="text-[18px] text-white">Explore our showcase of successful projects at Brand Builders Solution <br /> demonstrating our expertise in digital marketing, web development, design, and more</p>
      </div>
      <div className="bg-primary bg-opacity-5">
        <div className="screen-lg pb-[120px] ">
          <div className="py-20 text-center">
            <p className="text-[20px] font-semibold mb-4">Portfolio</p>
            <p className="text-[48px] font-bold text-black mb-6">Our recent works</p>
            <p className="text-[#494949]">Discover our latest projects at Brand Builders Solution, showcasing innovative digital strategies and <br /> successful client collaborations in marketing, design, web development, and more</p>
          </div>
          {/* portfolio card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[32px]">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
          </div>
          <button className="btn w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium block mx-auto">See All Portfolio</button>
        </div>
      </div>

      <LetsTalk />
    </div>
  )
}

export default Portfolio

export const PortfolioCard = ({ childVariant }) => {
  return (
    <motion.div
      variants={childVariant}
      className="p-5 shadow-lg rounded"
    >
      <img className='w-full object-cover mb-6 shadow' src="https://res.cloudinary.com/dwhhe5dgs/image/upload/v1719737462/houter/xvckakevgyn9jzhyb3ei.png" alt="" />
      <div className="">
        <p className='text-[32px] font-bold text-black mb-5'>Hotel Booking Website</p>
        <p className='text-[14px] text-[#494949] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, </p>
        <p className='text-[18px] font-semibold text-secondary flex items-center gap-3'>Read More <img className='h-[14px] ' src={more} alt="" /> </p>
      </div>
    </motion.div>
  )
}