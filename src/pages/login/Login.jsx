import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  //find id wise post using navigate and location
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);

  //login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result.user);
        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
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
          </div>
          <input
            className="mt-5 btn bg-slate-800 text-white font-bold hover:bg-stone-700 w-full"
            type="submit"
            value="Login"
          />
        </form>
        <p className="capitalize mt-4 text-center">
          {"don't have an account? "}
          <Link to={"/register"} className=" font-semibold text-amber-600">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
