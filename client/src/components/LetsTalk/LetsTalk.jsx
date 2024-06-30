import { Link } from "react-router-dom"

const LetsTalk = () => {
  return (
    <div className="max-w-screen-xl mx-auto  bg-secondary px-24 py-28 text-center md:text-start md:flex justify-between items-center space-y-8">
      <div className="">
        <p className="text-white font-bold text-[32px] mb-6">Do you have a project in mind?</p>
        <p className="text-white text-[18px]">Reach out to us for a personalized consultation <br /> tailored to your business needs</p>
      </div>
      <Link to="/services" className="btn w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium text-center py-4 ">Let&apos;s Talk</Link>
    </div>
  )
}

export default LetsTalk