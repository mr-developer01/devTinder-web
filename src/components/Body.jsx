import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../store/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(userData, "cheking userData from body!!");

  const fetchUser = async () => {
    if (userData) return;

    try {
      if (document.cookie) {
        const res = await axios.get(BASE_URL + "profile/view", {
          withCredentials: true,
        });
        console.log(res, "Comming from body!!");
        dispatch(addUser(res.data));
        navigate("/feed");
      }
    } catch (error) {
      if (error.status === 401) {
        navigate("/");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
