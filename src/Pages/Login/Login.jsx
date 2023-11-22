import { Link } from "react-router-dom";
import Navbar from "../Shared/Navabr/Navbar";
import { useContext } from "react";
import { MyContext } from "../../Context/AuthProvider";

const Login = () => {
    const {signIn} = useContext(MyContext)

     const handleLogin = (e) => {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password);

       signIn(email,password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.error(error)
       })
     };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 ">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center p-4">
              <p>
                New Here ?
                <Link to={"/register"}>
                  <button className="btn btn-link">Register Now</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
