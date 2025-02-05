import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => err.message);
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 font-semibold">
                  * This field is required !
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 block font-semibold">
                  * This field is required !
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className=" mt-6">
              <button className="w-full bg-black hover:scale-[97%] duration-200 rounded-md tracking-widest text-lg font-semibold text-white px-10 py-2">
                Login
              </button>
            </div>
          </form>
          <p className="text-center py-2">
            New here? Please{" "}
            <Link
              className="underline text-blue-700 font-semibold"
              to="/register">
              Register
            </Link>
          </p>
          <div className="w-3/4 mx-auto flex flex-col items-center gap-3 my-3">
            <button onClick={handleGoogle} className="btn rounded-4xl">
              <FcGoogle />
              Sign in with Google
            </button>
            <button onClick={handleGithub} className="btn rounded-4xl">
              <FaGithub />
              Sign in with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
