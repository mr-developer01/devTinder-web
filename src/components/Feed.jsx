import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import { toast } from "react-toastify";
import Shimmer from "./Shimmer";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;

    try {

      const res = await axios.get(BASE_URL + "user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));

    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(!feed){
    return (
      <div className="w-full h-screen flex justify-center pt-[15vh]">
        <Shimmer />
      </div>
    )
  }

  return (
    <div className="w-full h-[95vh] flex justify-center items-start mt-[15vh]">
      <UserCard feed={feed[0]} />
    </div>
  );
};

export default Feed;
