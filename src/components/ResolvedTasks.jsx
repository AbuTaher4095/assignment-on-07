import React from "react";

export default function ResolvedTasks({ tasks }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Resolved Task</h3>
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500 text-gray-700">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-2">
          {tasks.map(task => (
            <div
              key={task.id}
              className="bg-green-50 border border-gray-200 text-gray-700 p-2 rounded-lg text-sm"
            >
              {task.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

