import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastNane] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [skills, setSkills] = useState(user?.skills.join(","));
  const [about, setAbout] = useState(user?.about);

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    const newUserSkills = skills.split(",");
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        {
          photoUrl,
          firstName,  
          lastName,
          age,
          gender,
          skills: newUserSkills,
          about,
        },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data))
      toast.success(res.data.message || "Login successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error?.response?.data, {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-[10vw]">
      <div className="flex flex-col items-center justify-center max-lg:w-full">
        <h1 className="text-[1.4vw] ">Edit Profile</h1>
        <div className="card bg-[#fde825] text-neutral-content w-96 rounded-lg">
          <div className="card-body items-center text-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Update Your First Name</span>
              </div>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Update Your Last Name</span>
              </div>
              <input
                value={lastName}
                onChange={(e) => setLastNane(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Update Profile Photo</span>
              </div>
              <input
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Update Your Age</span>
              </div>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Age"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Update Your Gender</span>
              </div>
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                type="text"
                placeholder="Gender"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">
                  Add 8 skill max with comma(,) saparated
                </span>
              </div>
              <input
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                type="text"
                placeholder="Add Skills"
                className="input input-bordered w-full max-w-xs rounded-md text-black"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text ">Tell people about you!</span>
              </div>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Write here..."
                className="input input-bordered w-full h-[9vh] max-w-xs rounded-md text-black"
              ></textarea>
            </label>
            <div className="card-actions justify-end mt-[2vh]">
              <button
                onClick={handleSubmit}
                className="btn btn-base-content rounded-md px-[2vw]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard
        feed={{ photoUrl, firstName, lastName, age, gender, skills, about }}
      />
    </div>
  );
};

export default EditProfile;
