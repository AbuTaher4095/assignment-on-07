import React from "react";
import TicketCard from "./TicketCard";

export default function TicketSection({ tickets, onCardClick }) {
  return (
    <div className="col-span-2">
      <h3 className="text-xl font-semibold mb-4">Customer Tickets</h3>
      <div className="grid grid-cols-2 gap-4">
        {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onClick={() => onCardClick(ticket)}
          />
        ))}
      </div>
    </div>
  );
}
