import { Link } from "react-router-dom";

import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    console.log(form.get("password"));
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
                {showPassword ? (
                  <IoMdEyeOff></IoMdEyeOff>
                ) : (
                  <IoMdEyeOff></IoMdEyeOff>
                )}
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
