import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import validatePassword from "../../passwordValidation/PasswordValidation";

const Login = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, signInWithGoogle, logOut, passwordResetEmail } =
    useContext(AuthContext);

  const emailRef = useRef(null);
  //to go home page after longin
  const navigateToHomePage = useNavigate();
  //find id wise post using navigate and location
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  //sign in with google
  const handleSignWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess("You have Successfully Login with google");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  //login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // Password validation
    if (!validatePassword(password, !null, setRegisterError)) {
      return; // Stop execution if the password is not valid
    }
    //login
    login(email, password)
      .then((result) => {
        //reset data
        e.target.reset();
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("You have Successfully Login with email");
          //to go home page after longin
          navigateToHomePage("/");
          //navigate id wise post after login
          navigate(location?.state ? location.state : "/");
        } else {
          alert("Pleae check your email for verify");
          logOut();
        }
      })
      .catch((error) => {
        // console.log(error.message);
        setRegisterError(error.message);
      });
  };
  //forgot password
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setRegisterError("Please Provide an email");
      return;
    } else if (!emailRegex.test(email)) {
      setRegisterError("Please write a valid email");
      return;
    }
    //send password reset email
    passwordResetEmail(email)
      .then(() => {
        alert("Check Your email for forget Password");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="login w-1/3 p-10 rounded mx-auto shadow bg-slate-100">
        <h2 className="capitalize text-center mb-8 text-lg text-slate-500">
          login your account
        </h2>

        <hr />

        <form onSubmit={handleLogin}>
          <div className="form-control mt-6">
            <label className="label capitalize" htmlFor="email">
              <span className="label-text">email address</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              ref={emailRef}
              required
              className="p-2 rounded-md input input-bordered"
            />
          </div>
          <div className="form-control mt-5">
            <label className="label capitalize" htmlFor="password">
              <span className="label-text">password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                required
                className="p-2 rounded-md input input-bordered w-full"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-4 text-2xl"
              >
                {showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
              </span>
            </div>
            <label className="label">
              <a
                onClick={handleForgotPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <input
            className="mt-5 btn bg-slate-800 text-white font-bold hover:bg-stone-700 w-full"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          <button onClick={handleSignWithGoogle} className="btn btn-ghost">
            GOOGLE
          </button>
        </p>
        <p className="capitalize mt-4 text-center">
          {"don't have an account? "}
          <Link to={"/register"} className=" font-semibold text-amber-600">
            register
          </Link>
        </p>
        {registerError && (
          <p className="text-secondary mt-2 bg-warning p-1 rounded">
            {registerError}
          </p>
        )}
        {success && (
          <p className="text-success mt-2 bg-cyan-200 p-1 rounded">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
