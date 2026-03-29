import { useRef, useState } from "react";
import backgroundImg from "../assets/Front Background image.jpg";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleformSubmit = (e) => {
    // Handle form submission logic
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current?.value;
    const message = checkValidData(email, password, isSignIn, name);
    setError(message);
    if (Object.keys(message).length > 0) return;

    if (!isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch(() => {
              // An error occurred
              // ...
            });

          console.log(user);
        })
        .catch((error) => {
          setError({ firebase: error.message });
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          setError({ firebase: error.message });
        });
    }
  };

  const handleToggleSign = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen text-white">
      <img
        className="absolute w-full h-full object-cover"
        src={backgroundImg}
        alt="SignIn_Bg"
      />
      <Header />
      <div className="bg-black/70 absolute inset-0 flex justify-center items-center">
        <div className="bg-black/50 p-12 rounded w-96">
          <h1 className="text-3xl font-bold mb-6 ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col gap-4">
            {!isSignIn && (
              <input
                type="text"
                required
                placeholder="Full Name"
                className="p-3 rounded bg-black/80 border border-gray-50"
                ref={nameRef}
              />
            )}

            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

            <input
              type="email"
              required
              placeholder="Email"
              className="p-3 rounded bg-black/80 border border-gray-50"
              ref={emailRef}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
            <input
              type="password"
              required
              placeholder="Password"
              className="p-3 rounded bg-black/80 border border-gray-50"
              ref={passwordRef}
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
            <button
              className="bg-red-600 py-3 rounded font-semibold mt-2 font-bold cursor-pointer"
              onClick={handleformSubmit}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {error.firebase && (
              <p className="text-red-500 text-sm">{error.firebase}</p>
            )}

            <p className="underline text-md text-white-400 mt-2 cursor-pointer text-center font-medium">
              Forgot password?
            </p>

            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" />
              <label className="text-md text-white">Remember me</label>
            </div>

            <p className="text-gray-400 text-md font-bold mt-4">
              {isSignIn ? "New to Netflix?" : "Already Registred?"}
              <span
                className="text-white cursor-pointer"
                onClick={() => handleToggleSign()}
              >
                {isSignIn ? "Sign up now." : "Sign In now."}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
