import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("rahul@gmail.com");
  const [password, setPassword] = useState("Rahul@123");
  const [isLogin, setIsLogin] = useState(true);
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

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        {
          firstName,
          lastName,
          emailId,
          password
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data));
      toast.success(res.data.message || "Signup successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      return navigate("/profile");
    } catch (error) {
      toast.error(error?.response?.data, {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error);
    }
  }

  return (
    <div className="h-[90vh] flex items-center justify-center max-lg:w-full">
      <div className="card bg-[#fde825] text-neutral-content w-96 rounded-lg">
        <div className="card-body items-center text-center">
          <h1 className="text-[1.4vw] ">{isLogin ? "Login" : "Sign Up"}</h1>
          {!isLogin && (
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">First Name</span>
              </div>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
          )}
          {!isLogin && (
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Last Name</span>
              </div>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
          )}
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
              onClick={isLogin ? handleLogin : handleSignup}
              className="btn btn-warning rounded-md px-[2vw]"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </div>
          <p className="link link-info" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "New to DevTinder, Sign Up"
              : "Already at DevTinder, Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
