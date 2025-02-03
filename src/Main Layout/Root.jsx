import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="font-Lato ">
      <div className="h-[65px]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
