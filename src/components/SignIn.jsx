import { useRef, useState } from "react";
import backgroundImg from "../assets/Front Background image.jpg";
import Header from "./Header";
import { checkValidData } from "../utils/validation";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationFieldError, setValidationFieldError] = useState({});

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleformSubmit = (e) => {
    // Handle form submission logic
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const validationError = checkValidData(email, password, isSignIn, name);
    // console.log(validationError);
    setValidationFieldError(validationError);
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
                placeholder="Full Name"
                className="p-3 rounded bg-black/80 border border-gray-50"
                ref={nameRef}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-black/80 border border-gray-50"
              ref={emailRef}
            />
            {validationFieldError.email && (
              <p className="text-red-500 text-sm">
                {validationFieldError.email}
              </p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-black/80 border border-gray-50"
              ref={passwordRef}
            />
            {validationFieldError.password && (
              <p className="text-red-500 text-sm">
                {validationFieldError.password}
              </p>
            )}
            <button
              className="bg-red-600 py-3 rounded font-semibold mt-2 font-bold cursor-pointer"
              onClick={handleformSubmit}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            {/* 
            <p className="text-center text-gray-400">OR</p>

            <button className="bg-white/30 py-3 rounded font-bold">
              {" "}
              Use a sign-in code{" "}
            </button> */}

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
