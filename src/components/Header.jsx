import { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import logo from "../assets/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-full px-10 py-5 flex justify-between items-center z-20">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-36 cursor-pointer" />
      </Link>

      {isLoggedIn && (
        <div className="flex items-center gap-4">
          <button
            className="bg-red-600 px-4 py-2 rounded text-white font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
