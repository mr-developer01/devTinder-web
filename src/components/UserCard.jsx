import React from "react";

const UserCard = ({feed}) => {
    console.log(feed);
    const {photoUrl, firstName, lastName, age, gender, skills, about} = feed;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl rounded-2xl">
        <figure className="">
          <img
            src={photoUrl}
            alt="userPic"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age + " " + gender}</p>
          <p>{about}</p>
          <p>Skills: {skills.join(', ')}</p>
          <div className="card-actions justify-between mt-[2vh]">
            <button className="btn btn-error">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
