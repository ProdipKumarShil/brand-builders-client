import Lottie from 'lottie-react'
import about_lottie from '../../assets/lottie/about-anim.json'

const AboutUs = () => {
  return (
    <div className='screen-lg grid grid-cols-1 md:grid-cols-2 py-[120px] items-center'>
      <Lottie animationData={about_lottie} />
      <div className="">
        <p className='text-[20px] font-semibold text-[#333333] mb-4'>About US</p>
        <p className='text-[48px] font-bold text-[#333333] mb-6'>We are a creative agency</p>
        <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, luctus sapien vulputate urna tempor euismod adipiscing massa. Volutpat nunc quis dictum consectetur egestas varius. </p>
        <p className='text-secondary mb-10'>Ac sagittis tellus, sodales commodo elit, sociis purus. Egestas mauris eget commodo commodo et vel fermentum ultrices.</p>
        <button className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">More About Us</button>
      </div>
    </div>
  )
}

export default AboutUs