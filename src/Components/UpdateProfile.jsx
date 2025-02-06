import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { updateUser, user, setUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
    const { name, photoURL } = data;
    updateUser(name, photoURL)
      .then(() => {
        setUser((user) => ({
          ...user,
          displayName: name,
          photoURL: photoURL,
        }));
        setTimeout(() => {
          console.log("Updated User:", user); // Check Firebase update
        }, 500);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Helmet>
        <title>Update profile</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-xl text-center py-3 font-bold">
              Update Your Profile
            </h1>
            <form onSubmit={handleSubmit(submit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="display name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  {...register("photoURL")}
                />
              </div>
              <div className=" mt-6">
                <button className="w-full bg-black hover:scale-[97%] duration-200 rounded-md tracking-widest text-lg font-semibold text-white px-10 py-2">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
