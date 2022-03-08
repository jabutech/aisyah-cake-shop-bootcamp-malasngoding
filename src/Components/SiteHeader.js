import React from "react";

export default function SiteHeader() {
  return (
    <div className="flex justify-between border-b border-slate-100 py-2 text-sm">
      <div className="flex gap-8">
        <a href="/#" className="text-green-500">
          Chat with us!
        </a>
        <p>+62 822 761 123</p>
        <p>darmawanrizky43@gmail.com</p>
      </div>
      <div>
        <ul className="flex gap-8 text-green-500">
          <li>Blog</li>
          <li>About Us</li>
          <li>Career</li>
        </ul>
      </div>
    </div>
  );
}
