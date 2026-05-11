import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import logo from "../assets/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { userAvtar } from "../utils/constants";

const Header = () => {
  const Navigate = useNavigate();

  const Userstore = useSelector((store) => store.user);

  // console.log(Userstore);

  const dispatch = useDispatch();

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        Navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        Navigate("/");
      }
    });

    //unsubscribe when my component is unsubscribe
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-36 cursor-pointer" />
      </Link>

      {Userstore && (
        <div className="flex items-center gap-4">
          <img
            src={Userstore?.photoURL || userAvtar}
            alt="userAvatar"
            className="w-10 h-10 object-cover rounded-sm"
          />

          <h3 className="text-white">{Userstore?.displayName}</h3>
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
