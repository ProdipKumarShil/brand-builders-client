
import web from '../../assets/img/web.png'

const Services = () => {
  return (
    <div className="bg-primary py-[120px] bg-opacity-5">
      <div className="screen-lg mb-[72px]">
        <div className="text-center">
          <p className="font-semibold text-secondary text-[20px] mb-[20px]">Services</p>
          <p className="font-bold text-[48px] text-secondary mb-8">We Provide</p>
          <p className="text-[16px] text-[#494949]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc <br /> aliquam tincidunt est non. Viverra nec eu.</p>
        </div>
      </div>

      {/* cards */}
      <div className="screen-lg grid grid-cols-1 md:grid-cols-4 gap-4">
        <ServiceCard img={web} heading="Web Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard img={web} heading="Web Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard img={web} heading="Web Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ServiceCard img={web} heading="Web Design" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </div>
    </div>
  )
}

export default Services

const ServiceCard = ({img, heading, text}) => {
  return(
    <div className="bg-white p-2 text-center py-[58px]">
      <img className='mb-4 block mx-auto ' src={img} alt="" />
      <p className='mb-6 text-[32px] font-bold text-secondary'>{heading}</p>
      <p className='text-[14px] text-[#494949]'>{text}</p>
    </div>
  )
}