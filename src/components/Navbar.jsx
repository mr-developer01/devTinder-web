import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../store/userSlice";
import { BASE_URL } from "../utils/constant";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "logout",
        {},
        { withCredentials: true }
      );
      dispatch(addUser(null));
      toast.success(res.data || "Logged out successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Failed to log out.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="navbar glass bg-base-100 px-[4vw] max-lg:px-[2vw]">
        <div className="flex-1">
          <Link to={!document.cookie && "/"} className="text-xl">
            DevTinder
          </Link>
        </div>
        {user ? (
          <div className="flex gap-[1vw]">
            <p className="select-none text-[1vw] font-semibold max-lg:text-[2.4vw]">
              Welcome, {user.loginUser.firstName} {user.loginUser.lastName}
            </p>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.loginUser?.photoUrl}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Link to="login">login</Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
