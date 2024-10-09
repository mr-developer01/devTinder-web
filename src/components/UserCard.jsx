import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../store/feedSlice";
import { toast } from "react-toastify";

const UserCard = ({ feed }) => {
  const dispatch = useDispatch();
  // console.log(feed, "userCard");

  const handlePendingRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );

      dispatch(removeUserFromFeed(id));
      toast.success(status, {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(res);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  if (Array.isArray(feed) && feed.length === 0){
    return (
      <div className="flex justify-center gap-6 w-full h-screen">
        <div className="card bg-[#FFF248] w-96 h-fit shadow-xl rounded-2xl">
          <div className="card-body">
            <p>No new feed available.</p>
          </div>
        </div>
      </div>
    );
  }

  let photoUrl, firstName, lastName, age, gender, skills, about, _id;
  if (Array.isArray(feed)) {
    ({ photoUrl, firstName, lastName, age, gender, skills, about, _id } =
      feed[0]);
  } else {
    ({ photoUrl, firstName, lastName, age, gender, skills, about } = feed);
  }

  return (
    <div className="flex gap-6 max-lg:flex-col">
      <div className="card bg-[#FFF248] w-96 shadow-xl rounded-2xl pt-[3vh]">
        <figure className="w-full">
          <img src={photoUrl} alt="userPic" className="w-[8vw] rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{(age || "Age: ") + " | " + (gender || "Gender: ")}</p>
          <p>{about}</p>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Skills: {skills}
          </p>
          <div className="card-actions justify-between mt-[2vh]">
            {Array.isArray(feed) && (
              <button
                className="btn btn-error"
                onClick={() => {
                  handlePendingRequest("ignored", _id);
                }}
              >
                Ignore
              </button>
            )}
            {Array.isArray(feed) && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  handlePendingRequest("interested", _id);
                }}
              >
                Interested
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
