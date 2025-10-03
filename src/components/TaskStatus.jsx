import React from "react";

export default function TaskStatus({ tasks, onComplete }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Task Status</h3>
      {tasks.length === 0 ? (
        <p className="text-sm text-black">No tasks in progress.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white text-gray-700 p-3 rounded-lg shadow flex flex-col items-start"
            >
              <span className="text-sm font-medium mb-3">{task.title}</span>
              <button
                onClick={() => onComplete(task)}
                className="w-full bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700 transition"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
