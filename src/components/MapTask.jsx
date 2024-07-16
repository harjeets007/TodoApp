import React from "react";
import EditTask from "./EditTask";

const MapTask = ({ tasks, onUpdatae, onDelete }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li  className="bg-gray-100 mb-2 px-7 rounded-md" key={index}>
            <EditTask
              task={task}
              onUpdateTask={onUpdatae}
              onDeleteTask={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapTask;
