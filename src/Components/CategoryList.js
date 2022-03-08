import React from "react";

export default function CategoryList(props) {
  const { categoryName, categoryLink, categoryTotal } = props;
  return (
    <div className="mb-2">
      <a href={categoryLink} className="flex justify-between items-center">
        <span className="text-gray-900 hover:text-gray-500">
          {categoryName}
        </span>
        <span className="bg-emerald-100 opacity-80 text-green-900 text-sm font-semibold rounded-lg px-2 py-1">
          {categoryTotal}
        </span>
      </a>
    </div>
  );
}
