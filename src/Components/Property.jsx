import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";

const Property = ({ property }) => {
  const { image, estate_title, status, price, location, area } = property;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-48 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={estate_title}
        />
      </figure>
      <div className="w-11/12 mx-auto space-y-3 my-2">
        <div className="flex items-start justify-between ">
          <h2 className="text-left text-xl font-bold ">{estate_title} </h2>
          <div
            className={`badge font-bold ${
              status === "rent" ? "bg-amber-500" : "bg-green-400"
            } `}>
            {status}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <p className="flex justify-start items-center ">
            <SlLocationPin />
            {location}
          </p>
          <p>
            <span className="font-bold">{area}</span> Sq ft.
          </p>
        </div>
        <hr className="text-gray-300   " />
        <div>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

Property.propTypes = {
  property: PropTypes.object.isRequired,
};

export default Property;
