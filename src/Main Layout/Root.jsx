import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-lato">
      <Outlet />
    </div>
  );
};

export default Root;
