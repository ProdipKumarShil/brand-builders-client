import img from '../../assets/img/houter.png'
import more from '../../assets/icons/read-more.svg'
import LetsTalk from '../../components/LetsTalk/LetsTalk'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <div>
      <div className="bg-primary py-[120px] text-center pb-20">
        <p className="font-bold text-white text-[60px] mb-5">Our Portfolio</p>
        <p className="text-[18px] text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam </p>
      </div>
      <div className="bg-primary bg-opacity-5">
        <div className="screen-lg pb-[120px] ">
          <div className="py-20 text-center">
            <p className="text-[20px] font-semibold mb-4">Portfolio</p>
            <p className="text-[48px] font-bold text-black mb-6">Our recent works</p>
            <p className="text-[#494949]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mi blandit et ac elit eros, viverra. <br /> Elementum pellentesque sed scelerisque pellentesque auctor accumsan, <br /> velit posuere eget. </p>
          </div>
          {/* portfolio card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[32px]">
            <PortfolioCard img={img} />
            <PortfolioCard img={img} />
            <PortfolioCard img={img} />
            <PortfolioCard img={img} />
            <PortfolioCard img={img} />
          </div>
          <button className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium block mx-auto">See All Portfolio</button>
        </div>
      </div>

      <LetsTalk />
    </div>
  )
}

export default Portfolio

export const PortfolioCard = ({ img, childVariant }) => {
  return (
    <motion.div
      variants={childVariant}
      className="p-5 shadow-lg rounded"
    >
      <img className='w-full object-cover mb-6 shadow' src={img} alt="" />
      <div className="">
        <p className='text-[32px] font-bold text-black mb-5'>Hotel Booking Website</p>
        <p className='text-[14px] text-[#494949] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, </p>
        <p className='text-[18px] font-semibold text-secondary flex items-center gap-3'>Read More <img className='h-[14px] ' src={more} alt="" /> </p>
      </div>
    </motion.div>
  )
}