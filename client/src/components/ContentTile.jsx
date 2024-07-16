import React from "react";
import { Card } from "flowbite-react";
import { FcStart } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegBookmark, FaAmazon } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { BsStars } from "react-icons/bs";

const ContentTile = ({ title, description, path, tools }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  }
  return (
      <div className="rounded-xl border p-2 dark:bg-gray-400">
        <div className="rounded-xl bg-blue-100 p-3">
          <div className="flex flex-row justify-between">
            <div className="bg-white p-3 rounded-full">
              <BsStars />
            </div>
            <div className="flex bg-white p-3 rounded-full items-center cursor-pointer">
              <FaRegBookmark />
            </div>
          </div>
          <div className="flex flex-row mt-5">
              <div className="text-3xl">{title}</div>
          </div>
          <div className="mt-5 flex gap-3 flex-wrap">
            {tools.map((tool) => (
              <button className="border rounded-full p-2 border-black">
                {tool}
              </button>
            ))}
          </div>
        </div>
        <div className="flex my-5 justify-between mx-5 gap-10">
          <div className="">
            <div className="text-xl">{description}</div>
          </div>
          <div className="">
            <button onClick={handleNavigate} className="bg-black rounded-full p-3 text-white text-lg">
              Generate
            </button>
          </div>
        </div>
      </div>
  );
};

export default ContentTile;
