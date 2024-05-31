import Lottie from 'lottie-react'
import man from '../../assets/lottie/man-anim.json'

const Banner = () => {
  return (
    <div className="screen-lg grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="">
        <p className="font-bold text-secondary text-[60px] mb-8">We are the best agency in the world</p>
        <p className="text-[18px] text-secondary mb-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <div className="flex gap-4">
          <button className="bg-primary py-3 px-9 text-white rounded text-[18px] ">Start a project</button>
          <button className="border border-primary py-3 px-9 text-primary rounded text-[18px] ">Learn More</button>
        </div>
      </div>
      <div className="">
        <Lottie animationData={man}/>
      </div>
    </div>
  )
}

export default Banner