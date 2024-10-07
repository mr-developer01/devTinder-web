import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../store/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  console.log(connections, "selector");

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "user/request/accepted", {
      withCredentials: true,
    });
    dispatch(addConnection(res?.data?.data));
    console.log(res.data.data);
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!Connections) return;

  if (Connections.length === 0) <h1>No connection yet!!</h1>;

  return (
    <div className="w-full h-screen py-[2vw] px-[4vw] flex flex-col items-center gap-[2vh] max-lg:h-fit">
      {connections && connections.map((connection) => (
        <div className="w-[25vw] max-lg:w-full" key={connection._id}>
          <div className="flex items-center bg-base-100 shadow-xl">
            <figure className="">
              <img
                src={connection.photoUrl}
                alt="Movie"
                className="max-lg:w-[12vw] max-lg:h-[12vw] w-[4vw] h-[4vw] rounded-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{connection.firstName} {connection.lastName}</h2>
              <p>{connection.age} {connection.gender}</p>
              <p>{connection.about}</p>
              <div className="card-actions justify-start">
                <button className="bg-gray-500 text-white px-[1vw] py-[.8vh] rounded-md">remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Connections;
