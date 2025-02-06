import { Helmet } from "react-helmet";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";

const PropertyDetails = () => {
  const property = useLoaderData();
  const {
    estate_title,
    image,
    price,
    location,
    facilities,
    description,
    status,
    area,
  } = property;
  return (
    <div className="w-4/5 mx-auto my-10 space-y-5">
      <Helmet>
        <title>Property details</title>
      </Helmet>
      <div className="flex lg:flex-row flex-col justify-between items-start gap-2 text-3xl ">
        <h2 className="font-bold ">{estate_title}</h2>
        <h2 className="text-green-400">
          <span className="font-bold text-amber-500">${price}</span>/month
        </h2>
      </div>
      <hr className="text-gray-300" />
      <div className="flex lg:flex-row flex-col gap-5 justify-between items-start lg:text-xl ">
        <div>
          <p className="lg:text-2xl text-xl font-semibold">Facilities</p>
          <div className="flex justify-between lg:gap-5 gap-1">
            {facilities.map((f, idx) => (
              <p className="border px-1  sm:text- rounded-md " key={idx}>
                {f}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="lg:text-2xl font-semibold">Location</p>
          <p className="flex justify-between items-center text-green-400">
            <SlLocationPin className="text-amber-500" />
            {location}
          </p>
        </div>
      </div>
      <figure className="w-full  lg:h-[600px]  rounded-md overflow-hidden">
        <img
          className="object-cover"
          src={image}
          alt={estate_title}
          loading="lazy"
        />
      </figure>
      <div className="flex justify-between items-start">
        <div
          className={` px-7 rounded-lg tracking-widest py-1  text-xl font-bold ${
            status === "Rent" ? "bg-amber-500" : "bg-green-400"
          } `}>
          {status}
        </div>
        <p className="font-semibold">
          <span className="text-lg block">Area</span>{" "}
          <span className="font-bold"> {area}</span> Sq ft.
        </p>
      </div>
      <div>
        <h1 className="text-3xl my-5 font-bold">Description :</h1>
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
