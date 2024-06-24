import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import validatePassword from "../../passwordValidation/PasswordValidation";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  //redirect in home
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = form.get("terms");
    console.log(name, photo, email, password, accepted);

    // Password validation
    if (!validatePassword(password, accepted, setRegisterError)) {
      return; // Stop execution if the password is not valid
    }

    //register
    createUser(email, password)
      .then((result) => {
        //reset data
        e.target.reset();
        console.log(result.user);
        setSuccess("You have Successfully Registration");
        //redirect in home
        navigate("/");
        //Update a user's profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        }).then(() => {
          console.log("Profile Updated");
        });
        ////Send a user a verification email
        sendEmailVerification(result.user).then(() => {
          alert("Please Check your email for verifi your account ");
        });
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
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
          <div className="my-3">
            <input className="mr-2" type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept Terms and Condition</label>
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

export default Register;
