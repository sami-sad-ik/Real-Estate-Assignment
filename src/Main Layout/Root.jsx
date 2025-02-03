import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="font-lato">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
