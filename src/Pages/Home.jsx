import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Property from "../Components/Property";

const Home = () => {
  const properties = useLoaderData();
  return (
    <div className="lg:max-w-[80%] mx-auto">
      <Banner />
      <div className="text-center space-y-4 my-3">
        <h2 className="text-4xl font-bold">Today’s Luxury Listings</h2>
        <p className="text-lg text-gray-500 font-semibold">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 my-3">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
