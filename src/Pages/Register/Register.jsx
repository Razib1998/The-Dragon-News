import { Link } from "react-router-dom";
import Navbar from "../Shared/Navabr/Navbar";
import { useContext, useState } from "react";
import { MyContext } from "../../Context/AuthProvider";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createUser } = useContext(MyContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.Photo.value;
    console.log(email, password, name, photoUrl);

    // Reset Error
    setRegisterError("");
    setSuccess("");

    // Password validation
    if (password.length < 6) {
      setRegisterError("Password Must be at least six characters or  More");
      return;
    } 
    
    
    else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password Must have one upper Case");
      return;
    }

    //    For Creating A New User

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen  bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 ">Register Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="Photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute ml-64 mt-20 text-xl"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      ) : (
                        <IoEyeOutline></IoEyeOutline>
                      )}
                    </span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered static"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text  link link-hover font-semibold">
                        <a href="#">Terms and conditions</a>
                      </span>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="text-center p-4">
                <p>
                  Already have an account ?
                  <Link to={"/login"}>
                    <button className="btn btn-link">Login</button>
                  </Link>
                </p>
              </div>
              {registerError && (
                <p className="text-red-600 ml-4 ">{registerError}</p>
              )}
              {success && (
                <p className="text-green-700 font-bold ml-8">{success}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
