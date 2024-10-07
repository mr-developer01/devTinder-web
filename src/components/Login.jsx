import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";

const Login = () => {
  const [emailId, setEmailId] = useState("rahul@gmail.com");
  const [password, setPassword] = useState("Rahul@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      
      console.log(res);
      
      dispatch(addUser(res.data));
      toast.success(res.data.message || "Login successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      return navigate("/feed");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error.message);
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center max-lg:w-full">
      <div className="card bg-[#fde825] text-neutral-content w-96 rounded-lg">
        <div className="card-body items-center text-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text ">Enter Your Email</span>
            </div>
            <input
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              type="text"
              placeholder="Eamil@gmail.com"
              className="input input-bordered w-full max-w-xs rounded-md text-black"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text ">Enter Your Password</span>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password@123"
              className="input input-bordered w-full max-w-xs rounded-md text-black"
            />
          </label>
          <div className="card-actions justify-end mt-[2vh]">
            <button
              onClick={handleLogin}
              className="btn btn-warning rounded-md px-[2vw]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
