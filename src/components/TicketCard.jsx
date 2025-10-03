import React from "react";

export default function TicketCard({ ticket, onClick }) {
  const priorityColor = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
    >
      <div className="flex justify-between">
        <h4 className="font-semibold text-gray-700">{ticket.title}</h4>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            ticket.status === "Open"
              ? "bg-green-100 text-green-600"
              : ticket.status === "In-Progress"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {ticket.status}
        </span>
      </div>
      <p className="text-sm text-black mt-1 line-clamp-2">
        {ticket.description}
      </p>
      <div className="text-xs mt-3 flex justify-between">
        <span className={priorityColor[ticket.priority]}>
          {ticket.priority} PRIORITY
        </span>
        <span>{ticket.createdAt}</span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{ticket.customer}</div>
    </div>
  );
}
