import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    /*  const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password); */
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //register
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="login lg:w-1/3 md:w-1/2 px-10 py-6 rounded mx-auto shadow bg-slate-100">
        <h2 className="capitalize text-center mb-6 text-lg text-slate-500">
          register your account
        </h2>

        <hr />

        <form onSubmit={handleRegister}>
          <div className="form-control mt-4">
            <label className="label capitalize" htmlFor="name">
              <span className="label-text">your name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              required
              className="p-2 rounded-md input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label capitalize" htmlFor="url">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Enter Your URL"
              required
              className="p-2 rounded-md input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
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
          <div className="form-control mt-4">
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
            value="Register"
          />
        </form>
        <p className="capitalize mt-4 text-center">
          {"allready have and account? "}
          <Link to={"/login"} className=" font-semibold text-amber-600">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
