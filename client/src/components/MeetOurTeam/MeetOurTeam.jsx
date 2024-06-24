import profilePic from '../../assets/img/profile.png'

const MeetOurTeam = () => {
  return (
    <div className="bg-primary bg-opacity-5">
      <div className="screen-lg py-[120px]">
        <div className="text-center mb-20">
          <p className="text-secondary font-semibold mb-4">Meet Our Team</p>
          <p className="text-[48px] font-bold mb-8">Our Expert Members </p>
          <p className="text-[#494949]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Diam vivamus pretium maecenas amet.</p>
        </div>
        
        {/* img cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam

const ImgCard = () => {
  return(
    <div className="relative">
      <img className='w-full h-[380px] object-cover' src={profilePic} alt="" />
      <div className="bg-white rounded-xl p-3 shadow w-[90%] absolute -bottom-[60px] left-1/2 -translate-x-1/2">
        <p className='font-bold text-[24px] text-secondary'>Brooklyn Simmons</p>
        <p className='text-[18px] text-[#494949]'>Designer</p>
      </div>
    </div>
  )
}