import { Link } from 'react-router-dom'
import menu from '../../assets/icons/menu.svg'
import logo from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <div className="border-b">
      <div className="max-w-screen-xl px-2 py-8 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/"><img className='w-24' src={logo} alt="" /></Link>
        <div className="md:flex gap-10 hidden">
          {/* <Link to='/' >Home</Link> */}
          <Link to="/services">Services</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="">
          <Link to="/services" className="btn hidden md:block w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium  p-4 text-center">Contact</Link>

          {/* drawer */}
          <div className="drawer md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="w-8 h-8 active:scale-95 block md:hidden">
                <img src={menu} alt="" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li><a>Home</a></li>
                <li><a>Service</a></li>
                <li><a>About Us</a></li>
                <li><a>Portfolio</a></li>
              </ul>
            </div>
          </div>
          {/* drawer */}

        </div>
      </div>
    </div>
  )
}

export default Header