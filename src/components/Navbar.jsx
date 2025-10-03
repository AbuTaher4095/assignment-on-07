import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-gray-700">CS — Ticket System</h1>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
        </ul>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          + New Ticket
        </button>
      </div>
    </nav>
  );
}
