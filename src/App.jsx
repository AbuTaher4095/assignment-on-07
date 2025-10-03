import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeaderCounter from "./components/HeaderCounter";
import TicketSection from "./components/TicketSection";
import TaskStatus from "./components/TaskStatus";
import ResolvedTasks from "./components/ResolvedTasks";
import Footer from "./components/Footer";
import ticketsData from "./data/ticketsData";

export default function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleCardClick = (ticket) => {
    alert(`Ticket moved to In Progress: ${ticket.title}`);
    setInProgress(prev => prev + 1);
    setTaskStatus(prev => [...prev, ticket]);
    setTickets(prev =>
      prev.map(t => (t.id === ticket.id ? { ...t, status: "In-Progress" } : t))
    );
  };

  const handleComplete = (ticket) => {
    alert(`Ticket marked as Resolved: ${ticket.title}`);
    setTaskStatus(prev => prev.filter(t => t.id !== ticket.id));
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    setResolvedTasks(prev => [...prev, { ...ticket, status: "Resolved" }]);
    setInProgress(prev => prev - 1);
    setResolved(prev => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <HeaderCounter inProgress={inProgress} resolved={resolved} />
      
      <div className="flex-grow max-w-6xl mx-auto mt-8 grid grid-cols-3 gap-6">
        <TicketSection tickets={tickets} onCardClick={handleCardClick} />
        <div>
          <TaskStatus tasks={taskStatus} onComplete={handleComplete} />
          <ResolvedTasks tasks={resolvedTasks} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
