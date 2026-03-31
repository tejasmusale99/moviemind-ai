import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import logo from "../assets/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import userAvtar from "../utils/images/avtar user.jpg";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const Navigate = useNavigate();

  const Userstore = useSelector((store) => store.user);

  console.log(Userstore?.displayName);

  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  };

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                Navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
           Navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-full px-10 py-5 flex justify-between items-center z-20">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-36 cursor-pointer" />
      </Link>

      {Userstore && (
        <div className="flex items-center gap-4">
          <img src={userAvtar} alt="userAvtar" className="w-10 h-10" />
          <h3>{Userstore?.displayName}</h3>

          <button
            className="bg-red-600 px-4 py-2 rounded text-white font-semibold cursor-pointer text-sm"
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
