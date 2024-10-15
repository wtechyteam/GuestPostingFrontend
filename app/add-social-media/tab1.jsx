import React from "react";

const AccountLink = ({ primaryUrl, secondaryUrl, status, isActive, price }) => {
  return (
    <div className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-md space-x-6">
      {/* Left Section: URLs, Status, and Price */}
      <div className="flex items-center space-x-48">
        <a href={primaryUrl} className="text-blue-600 hover:underline truncate">
          {primaryUrl}
        </a>

        <a
          href={secondaryUrl}
          className="text-gray-500 text-sm hover:underline truncate"
        >
          {secondaryUrl}
        </a>

        <span className="text-gray-500 text-sm">{status}</span>

        <span className="text-gray-700 font-semibold">${price}</span>
      </div>

      {/* Right Section: Status and Buttons */}
      <div className="flex items-center space-x-8">
        {/* Status Badge */}
        <span
          className={`text-sm font-medium ${
            isActive ? "text-green-600" : "text-gray-400"
          }`}
        >
          {isActive ? "Activate" : "Offline"}
        </span>

        {/* Delete Icon Button */}
        <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" />
            <path d="M5 6h14v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>

        <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-400">
          {isActive ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
};

export default AccountLink;
