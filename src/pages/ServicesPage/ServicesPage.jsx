import phone from '../../assets/icons/phone.svg'
import message from '../../assets/icons/message.svg'
import location from '../../assets/icons/location.svg'

const ServicesPage = () => {
  return (
    <div className="screen-lg grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
      <div className="text-[#333333]">
        <p className='text-[32px] font-bold mb-5'>Now Start Your Project</p>
        <p className='mb-10'>Fill up the from and our Team will get back to you within 24 hours.</p>
        <div className="space-y-5 mb-10 md:mb-0">
          <div className="flex items-center gap-3">
            <img className='w-6 h-6' src={phone} alt="" />
            <p>+9948 9283 092384</p>
          </div>
          <div className="flex items-center gap-3">
            <img className='w-6 h-6' src={message} alt="" />
            <p className='text-[16px]'>brandbuilders.solution@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <img className='w-6 h-6' src={location} alt="" />
            <p>Khulna, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="">

        <div className="mb-8">
          <p className="mb-2 text-[20px] font-semibold">Full Name</p>
          <div className="relative z-0 w-full mb-5 group">
            <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
          </div>
        </div>
        <div className="mb-8">
          <p className="mb-2 text-[20px] font-semibold">Email</p>
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
        </div>
        <div className="mb-8">
          <p className="mb-2 text-[20px] font-semibold">Message</p>
          <div className="relative z-0 w-full mb-5 group">
            <input type="message" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
            <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write your message</label>
          </div>
        </div>

        <div className="mb-[66px]">
          <p className="mb-2 text-[20px] font-semibold">What service do you want?</p>
          <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option selected>Choose a service</option>
            <option value="US">Figma to html</option>
            <option value="CA">Lead generation</option>
            <option value="FR">Video editing</option>
            <option value="DE">T-shirt design</option>
            <option value="DE">Single page seo</option>
            <option value="DE">Logo design</option>
            <option value="DE">Digital marketing</option>
            <option value="DE">Facebook page boosting</option>
          </select>
        </div>
        <button className=" w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">Book Service</button>

      </div>
    </div>
  )
}

export default ServicesPage