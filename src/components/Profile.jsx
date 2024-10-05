import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="py-[4vh]">
      {user && <EditProfile user={user?.loginUser} />}
    </div>
  );
};

export default Profile;
