import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Root = () => {
  return (
    <div className="font-Lato ">
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <div className="h-[65px]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
