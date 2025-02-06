import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  const {
    id,
    image,
    estate_title,
    status,
    price,
    location,
    area,
    segment_name,
  } = property;
  return (
    <Link to={`/property/${id}`} className=" card bg-base-100 w-96 shadow-xl">
      <figure className="h-52 w-full overflow-hidden">
        <img
          className="hover:scale-110 duration-700  w-full h-full object-cover"
          src={image}
          alt={estate_title}
          loading="lazy"
        />
      </figure>
      <div className="w-11/12 mx-auto space-y-3 my-2 p-3 flex flex-col h-48">
        <div className="flex items-start justify-between ">
          <h2 className="text-left text-xl font-bold min-h-14">
            {estate_title}{" "}
          </h2>
          <div
            className={`badge font-bold ${
              status === "Rent" ? "bg-amber-500" : "bg-green-400"
            } `}>
            {status}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <p className="flex justify-start items-center font-semibold">
            <SlLocationPin />
            {location}
          </p>
          <p className="font-semibold">
            <span className="font-bold">{area}</span> Sq ft.
          </p>
        </div>
        <hr className="text-gray-300   " />
        <div className="flex justify-between items-center font-semibold ">
          <p className=" bg-blue-300 rounded-lg px-2">{segment_name}</p>
          <p className="text-2xl text-amber-500 font-bold ">${price}</p>
        </div>
      </div>
    </Link>
  );
};

Property.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Property;
