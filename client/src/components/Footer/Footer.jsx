import fb from '../../assets/icons/fb-squ.svg'
import insta from '../../assets/icons/insta-squ.svg'
import linked from '../../assets/icons/linked-squ.svg'
import pin from '../../assets/icons/pin-squ.svg'
import x from '../../assets/icons/x-squ.svg'
import youtube from '../../assets/icons/youtube-squ.svg'

const Footer = () => {
  return (
    <div className="bg-primary bg-opacity-5 py-20">
      <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 screen-lg gap-16">
        <div>
          <h1 className="font-bold text-3xl mb-8">Logo</h1>
          <p className="text-[18px] text-[#494949] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie nulla massa fringilla. </p>
          <div className="flex gap-4">
            <img className='h-8 w-8' src={fb} alt="" />
            <img className='h-8 w-8' src={insta} alt="" />
            <img className='h-8 w-8' src={linked} alt="" />
            <img className='h-8 w-8' src={pin} alt="" />
            <img className='h-8 w-8' src={x} alt="" />
            <img className='h-8 w-8' src={youtube} alt="" />
          </div>
        </div>

        {/* menu */}
        <div className="">
          <p className='text-[20px] font-semibold text-black mb-8'>Menu</p>
          <div className="space-y-4">
            <p className='text-[18px] text-[#494949]'>Home</p>
            <p className='text-[18px] text-[#494949]'>About Us</p>
            <p className='text-[18px] text-[#494949]'>Blog</p>
            <p className='text-[18px] text-[#494949]'>Services</p>
            <p className='text-[18px] text-[#494949]'>Contact Us</p>
          </div>
        </div>
        {/* menu */}
        <div className="">
          <p className='text-[20px] font-semibold text-black mb-8'>Utility Pages</p>
          <div className="space-y-4">
            <p className='text-[18px] text-[#494949]'>Home</p>
            <p className='text-[18px] text-[#494949]'>About Us</p>
            <p className='text-[18px] text-[#494949]'>Blog</p>
            <p className='text-[18px] text-[#494949]'>Services</p>
            <p className='text-[18px] text-[#494949]'>Contact Us</p>
          </div>
        </div>
        {/* menu */}
        <div className="">
          <p className='text-[20px] font-bold text-black mb-10'>Subscribe to our newsletter</p>
          {/* <p className="text-[18px] text-[#494949] mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie nulla massa fringilla. </p> */}
          <div className="">
            <input className='w-[90%] bg-[#333333] py-[13px] px-6 text-[18px] text-white text-opacity-85 rounded mb-6' placeholder='Enter your email' type="text" />
            <button className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">Subscribe</button>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer