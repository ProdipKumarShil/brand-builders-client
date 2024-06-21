import { PortfolioCard } from "../../pages/Portfolio/Portfolio"
import img from '../../assets/img/houter.png'


const MoreProject = () => {
  return (
    <div className="screen-lg py-[120px]">
      <p className="text-[48px] font-bold mb-20">More Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PortfolioCard img={img} />
        <PortfolioCard img={img} />
        <PortfolioCard img={img} />
      </div>
    </div>
  )
}

export default MoreProject