
const Header = () => {
  return (
    <div className="border-b">
      <div className="max-w-screen-xl px-2 py-8 mx-auto flex justify-between items-center">
      {/* logo */}
      <h1 className="font-bold text-3xl">Logo</h1>
      <div className="flex gap-10">
        <p>Home</p>
        <p>Service</p>
        <p>About Us</p>
        <p>Portfolio</p>
      </div>
      <div className="">
        <button className="w-[200px] h-[54px] rounded bg-primary text-white text-[18px] font-medium">Contact</button>
      </div>
    </div>
    </div>
  )
}

export default Header