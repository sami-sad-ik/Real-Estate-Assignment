import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    const { email, password } = data;
    console.log(data);
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-xl text-center py-3 font-semibold">
            Register Now
          </h1>
          <form onSubmit={handleSubmit(submit)} className="card-body">
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
                <span className="text-red-600 font-semibold">
                  * This field is required !
                </span>
              )}
            </div>
            <div className=" mt-6">
              <button className="w-full bg-black hover:scale-[97%] duration-200 rounded-md tracking-widest text-lg font-semibold text-white px-10 py-2">
                Register
              </button>
            </div>
          </form>
          <p className="text-center py-2">
            New here? Please{" "}
            <Link className="underline text-blue-700 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
