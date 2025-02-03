import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Property from "../Components/Property";

const Home = () => {
  const properties = useLoaderData();
  return (
    <div>
      <div className="lg:max-w-[80%] mx-auto">
        <Banner />
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
