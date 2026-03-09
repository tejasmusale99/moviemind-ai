import logo from "../assets/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className="absolute w-full px-10 py-5 flex justify-between items-center z-20">
        <img src={logo} alt="logo" className="w-36 cursor-pointer" />

        <div className="flex items-center gap-4">
            <select className="bg-black text-white border border-gray-500 px-3 py-1 rounded">
                <option>English</option>
                <option>हिंदी</option>
            </select>
            <button className="bg-red-600 px-4 py-2 rounded text-white font-semibold">Sign In</button>
        </div>
    </div>
  )
}

export default Header