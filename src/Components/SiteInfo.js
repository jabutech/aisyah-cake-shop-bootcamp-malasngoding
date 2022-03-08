import React from "react";

export default function SiteInfo() {
  return (
    <div className="justify-between flex py-14">
      <div className="flex justify-center items-center ">
        <img
          src="/images/logo-cake.png"
          alt="logo-cake"
          className="w-7 h-6 mr-1"
        />
        <h1 className="text-3xl font-bold text-gray-800">AisyahCake</h1>
      </div>
      <div className="flex w-full justify-center">
        <input
          type="text"
          className="border-2 border-gray-200 focus:border-blue-200 outline-none py-1 px-2 text-1xl rounded-2xl w-2/4"
          placeholder="Search here ..."
        />
        <img
          src="images/search-icon.png"
          alt=""
          className="w-4 h-4 self-center -ml-8"
        />
      </div>
      <div className="gap-5 flex ">
        <img
          src="images/person-icon.png"
          alt=""
          className="w-6 h-6 self-center"
        />
        <div className="w-9 h-9 pt-1">
          <img
            src="images/trash-icon.png"
            alt=""
            className="w-6 h-6 self-center relative"
          />
          <span className="z-10 absolute text-xs bg-orange-500 rounded-full text-white w-4 h-4 px-1 -mt-2">
            4
          </span>
        </div>
      </div>
    </div>
  );
}
