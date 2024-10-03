import React from "react";

const UserCard = ({ feed }) => {
  // const {photoUrl, firstName, lastName, age, gender, skills, about} = feed;
  return (
    <div className="flex gap-6 max-lg:flex-col">
      {feed.map((data) => (
        <div key={data._id} className="card bg-base-100 w-96 shadow-xl rounded-2xl">
          <figure className="w-full">
            <img src={data?.photoUrl} alt="userPic" className="w-[6vw]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data?.firstName + " " + data?.lastName}
            </h2>
            <p>{data?.age + " " + data?.gender}</p>
            <p>{data?.about}</p>
            <p>Skills: {data?.skills.join(", ")}</p>
            <div className="card-actions justify-between mt-[2vh]">
              <button className="btn btn-error">Ignore</button>
              <button className="btn btn-primary">Interested</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
