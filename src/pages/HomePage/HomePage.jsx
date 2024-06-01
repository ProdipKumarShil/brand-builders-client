import AboutUs from "../../components/AboutUs/AboutUs"
import Banner from "../../components/Banner/Banner"
import Faq from "../../components/Faq/Faq"
import LetsTalk from "../../components/LetsTalk/LetsTalk"
import Services from "../../components/Services/Services"

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutUs />
      <Faq />
      <LetsTalk />
    </>
  )
}

export default HomePage