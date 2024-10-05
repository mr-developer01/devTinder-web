import React from "react";

const UserCard = ({ feed }) => {
  // console.log(feed, "userCard");
  let photoUrl, firstName, lastName, age, gender, skills, about;
  if (Array.isArray(feed)) {
    ({ photoUrl, firstName, lastName, age, gender, skills, about } = feed[0]);
  } else {
    ({ photoUrl, firstName, lastName, age, gender, skills, about } = feed);
  }

  // const { photoUrl, firstName, lastName, age, gender, skills, about } = feed[0];
  return (
    <div className="flex gap-6 max-lg:flex-col">
      <div className="card bg-[#FFF248] w-96 shadow-xl rounded-2xl pt-[3vh]">
        <figure className="w-full">
          <img src={photoUrl} alt="userPic" className="w-[8vw] rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{age + " " + gender}</p>
          <p>{about}</p>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
            Skills: {skills}
          </p>
          <div className="card-actions justify-between mt-[2vh]">
            {Array.isArray(feed) && <button className="btn btn-error">Ignore</button>}
            {Array.isArray(feed) && <button className="btn btn-primary">Interested</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
