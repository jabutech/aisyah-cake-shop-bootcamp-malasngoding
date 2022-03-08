import React from "react";
import Star from "../Components/atom/Star";
import CardMenu from "../Components/CardMenu";
import CategoryList from "../Components/CategoryList";
import menuData from "../fake-data/menu.json";

export default function Content() {
  return (
    <div className="flex w-full mb-5">
      {/* Side bar */}
      <div className="w-1/5 mr-5 px-3">
        {/* categories */}
        <div className="w-full mb-10">
          <h1 className="font-semibold mb-2">Categories</h1>
          <CategoryList
            categoryName="Bolu"
            categoryLink="/#"
            categoryTotal="320"
          />
          <CategoryList
            categoryName="Mie"
            categoryLink="/#"
            categoryTotal="112"
          />
          <CategoryList
            categoryName="Pizza"
            categoryLink="/#"
            categoryTotal="32"
          />
          <CategoryList
            categoryName="Dessert"
            categoryLink="/#"
            categoryTotal="48"
          />
        </div>
        {/* Orderby */}
        <div className="w-full mb-10">
          <h1 className="font-semibold mb-2">Order By</h1>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-5 w-5 accent-green-600" />
              <span className="ml-2 text-gray-900">Termurah</span>
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-5 w-5 accent-green-600" />
              <span className="ml-2 text-gray-900">Terlaris</span>
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input type="checkbox" className="h-5 w-5 accent-green-600" />
              <span className="ml-2 text-gray-900">Termahal</span>
            </label>
          </div>
        </div>
        {/* Rating */}
        <div className="w-full mb-10">
          <h1 className="font-semibold mb-2">Rating</h1>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-green-600 mr-2"
              />
              <Star starActive={5} />
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-green-600 mr-2"
              />
              <Star starActive={4} />
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-green-600 mr-2"
              />
              <Star starActive={3} />
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-green-600 mr-2"
              />
              <Star starActive={2} />
            </label>
          </div>
          <div className="item-center">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-green-600 mr-2"
              />
              <Star starActive={1} />
            </label>
          </div>
        </div>
        {/* Price */}
        <div className="w-full mb-10">
          <h1 className="font-semibold mb-2">Price</h1>
          <input type="range" className="accent-green-600 w-full" />
        </div>
        {/* Input Min max */}
        <div className="w-full mb-10">
          <div className="inline-flex">
            <div className="w-1/2">
              <h2 className="font-semibold">Min</h2>
              <input
                type="text"
                placeholder="0"
                className="border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-green-600"
              />
            </div>
            <div className="px-6 pt-10">
              <span className="text-gray-400">-</span>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold">Max</h2>
              <input
                type="text"
                placeholder="0"
                className="border rounded-xl p-4 w-full bg-slate-100 outline-none focus:outline-green-600"
              />
            </div>
          </div>
        </div>
        {/* Button apply & reset */}
        <div>
          <button className="bg-green-600 hover:bg-green-500 outline outline-green-700 hover:outline hover:outline-gren-600 rounded-lg py-3 px-7 text-white text-lg font-bold mr-10 transition-colors duration-150">
            Apply
          </button>
          <button className="text-gray-400 font-bold text-lg hover:bg-red-600 hover:rounded-lg hover:py-3 hover:px-7 hover:text-white hover:text-lg hover:font-bold hover:-ml-7 transition-colors duration-300">
            Reset
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className="w-4/5">
        {/* Wrap Card Menu */}
        <div className="w-full h-3/4 flex flex-wrap mb-5">
          {menuData.map((item) => (
            <>
              {/* Card Menu */}
              <CardMenu
                image={item.image}
                menuName={item.menuName}
                menuDetail={item.menuDetail}
                menuPrice={item.menuPrice}
                menuDiskon={item.menuDiskon}
                percentDiskon={item.percentDiskon}
              />
            </>
          ))}
        </div>
        {/* Button more products */}
        <div className="w-full h-1/4 flex justify-center items-center">
          <a
            href="/#"
            className="flex bg-green-600 hover:bg-green-500 outline outline-green-700 hover:outline hover:outline-gren-600 rounded-lg py-2 px-4 text-white text-lg font-bold mr-10 transition-colors duration-150"
          >
            Show more products
            <img
              src="/images/chevron-white.png"
              alt="chevron"
              className="ml-1 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
