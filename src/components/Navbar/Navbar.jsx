import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row  justify-between items-center py-4 ">
      <div>
        {/* <img src="../../../public/Logo.png" alt="" /> */}
        <img src="https://i.ibb.co/h14YSSq/Logo.png" alt="" />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-bold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
