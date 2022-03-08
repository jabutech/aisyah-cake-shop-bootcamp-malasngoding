import React from "react";

export default function CardMenu(props) {
  const { image, menuName, menuDetail, menuPrice, menuDiskon, percentDiskon } =
    props;
  return (
    <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-10">
      <div className="p-3 border-2 border-gray-300 rounded-lg shadow-md text-gray-800">
        {percentDiskon && (
          <span className="z-10 absolute text-xs font-semibold text-green-600 bg-green-100 rounded-2xl py-1 px-3 m-2">
            - {percentDiskon}%
          </span>
        )}
        <img
          src={`images/menu/${image}.png`}
          alt={`${image}`}
          className="object-fill relative"
        />
        <div className="pt-5 mb-4">
          <h1 className="font-bold">{menuName}</h1>
          <span className="text-sm text-gray-500">{menuDetail}</span>
        </div>
        <div className="flex justify-between ">
          <div>
            <h1 className="text-lg font-bold">{menuPrice}</h1>
            {/* If menuDiskon is available*/}
            {menuDiskon && (
              // Return
              <h2 className="text-sm text-gray-400 font-semibold line-through">
                {menuDiskon}
              </h2>
            )}
          </div>
          <div>
            <button className="w-full bg-green-600 hover:bg-green-500 outline outline-green-700 hover:outline hover:outline-gren-600 rounded-lg py-2 px-2 text-white text-lg font-bold mr-10 transition-colors duration-150">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
