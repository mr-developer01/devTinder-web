import React, { useRef } from "react";

const Login = () => {
  const userEmail = useRef();
  const userPassword = useRef();

  return (
    <div className="h-[90vh] flex items-center justify-center max-lg:w-full">
      <div className="card bg-[#fde825] text-neutral-content w-96 rounded-lg">
        <div className="card-body items-center text-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text ">Enter Your Email</span>
            </div>
            <input
              value={userEmail.current}
              onChange={(e) => {
                userEmail.current = e.target.value;
              }}
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
              value={userPassword.current}
              onChange={(e) => {
                userPassword.current = e.target.value;
              }}
              type="password"
              placeholder="Password@123"
              className="input input-bordered w-full max-w-xs rounded-md text-black"
            />
          </label>
          <div className="card-actions justify-end mt-[2vh]">
            <button className="btn btn-warning rounded-md px-[2vw]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
