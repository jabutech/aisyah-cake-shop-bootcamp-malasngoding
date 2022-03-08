import React from "react";

export default function Footer() {
  return (
    <div className="w-full p-10">
      {/* Footer list */}
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-lg font-bold mb-5">Get in touch</h1>
          <ul className="font-light text-sm space-y-3">
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              About Us
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Careers
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Press Release
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Blog
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-5">Connections</h1>
          <ul className="font-light text-sm space-y-3">
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Facebook
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Twitter
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Instagram
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Youtube
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Linkedin
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-5">Earnings</h1>
          <ul className="font-light text-sm space-y-3">
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Become an Affliate
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Advertise your product
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Sell on Market
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold mb-5">Account</h1>
          <ul className="font-light text-sm space-y-3">
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Your Account
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Return Center
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              100% purchase protection
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Chat with us
            </li>
            <li className="text-green-500 hover:text-green-700 cursor-pointer">
              Help
            </li>
          </ul>
        </div>
      </div>
      {/* Copy right */}
      <div>
        <span className="text-gray-800">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <b className="font-semibold">aisyahcake.com</b>
        </span>
      </div>
    </div>
  );
}
