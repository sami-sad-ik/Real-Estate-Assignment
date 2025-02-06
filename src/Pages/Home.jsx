import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Property from "../Components/Property";
import { Helmet } from "react-helmet";

const Home = () => {
  const properties = useLoaderData();
  return (
    <div className="lg:max-w-[80%] mx-auto">
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Banner />
      <div className="text-center space-y-4 my-3">
        <h2 className="text-4xl font-bold">Today’s Luxury Listings</h2>
        <p className="text-lg text-gray-500 font-semibold">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md: gap-5 my-3">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
