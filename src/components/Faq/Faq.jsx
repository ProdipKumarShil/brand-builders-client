import { motion } from "framer-motion"

const Faq = () => {

  const parentVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const childVarient = {
    initial: { opacity: 0, x: 200, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1 },
    
  }

  const hoverVariants= {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }

  return (
    <div className="bg-primary bg-opacity-5">
      <div className="screen-lg py-[120px]">
        <div className="text-center mb-20">
          <p className="font-semibold mb-4 text-[20px] text-[#333333]">FAQ</p>
          <p className="font-bold text-[48px] text-[#333333]">Find the answers you need</p>
        </div>

        <motion.div
          viewport={{once: true, amount: 0.2}}
          variants={parentVarient}
          initial="initial"
          whileInView="animate"
          className="">
          <motion.div whileHover={hoverVariants} variants={childVarient} className="mb-6 collapse collapse-arrow bg-white rounded shadow-md max-w-[996px] mx-auto">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What services does your IT agency provide?
            </div>
            <div className="collapse-content">
              <p>We offer a wide range of IT services including software development, web development, mobile app development, IT consulting, cybersecurity solutions, cloud services, and more.</p>
            </div>
          </motion.div>
          <motion.div whileHover={hoverVariants} variants={childVarient} className="mb-6 collapse collapse-arrow bg-white rounded shadow-md max-w-[996px] mx-auto">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How experienced is your team?
            </div>
            <div className="collapse-content">
              <p>Our team consists of highly skilled professionals with years of experience in the IT industry. We have experts in various domains who are dedicated to delivering top-notch solutions to our clients.</p>
            </div>
          </motion.div>

          <motion.div whileHover={hoverVariants} variants={childVarient} className="mb-6 collapse collapse-arrow bg-white rounded shadow-md max-w-[996px] mx-auto">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do you ensure the security of our data and systems?
            </div>
            <div className="collapse-content">
              <p>Security is our top priority. We implement industry best practices and use the latest technologies to safeguard your data and systems against cyber threats. We conduct regular security audits and provide proactive monitoring to ensure maximum protection.</p>
            </div>
          </motion.div>
          <motion.div whileHover={hoverVariants} variants={childVarient} className="mb-6 collapse collapse-arrow bg-white rounded shadow-md max-w-[996px] mx-auto">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can you provide examples of your past projects?
            </div>
            <div className="collapse-content">
              <p>Certainly! We have successfully completed projects ranging from small-scale applications to enterprise-level solutions. You can check out our portfolio on our website or request case studies relevant to your industry.</p>
            </div>
          </motion.div>
          <motion.div whileHover={hoverVariants} variants={childVarient} className="mb-6 collapse collapse-arrow bg-white rounded shadow-md max-w-[996px] mx-auto">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is your approach to project management?
            </div>
            <div className="collapse-content">
              <p>We follow agile methodologies to ensure flexibility, transparency, and collaboration throughout the project lifecycle. Our project managers work closely with clients to define clear goals, prioritize tasks, and deliver results on time and within budget.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Faq