import { Link } from "react-router-dom";
import logo from "../assets/Netflix_Logo_PMS.png";
import { useSelector } from "react-redux";
const Header = () => { 
    const user = useSelector((store) => store.user);

  console.log(user);
  return (
    <div className="absolute w-full px-10 py-5 flex justify-between items-center z-20">
      <Link to={"/"}><img src={logo} alt="logo" className="w-36 cursor-pointer" /></Link>

      <div className="flex items-center gap-4">
        <select className="bg-black text-white border border-gray-500 px-3 py-1 rounded">
          <option>English</option>
          <option>हिंदी</option>
        </select>
        {/* <button className="bg-red-600 px-4 py-2 rounded text-white font-semibold">
          <Link to={"/signin"}>Sign In</Link>
        </button> */}
      </div>
    </div>
  );
};

export default Header;
