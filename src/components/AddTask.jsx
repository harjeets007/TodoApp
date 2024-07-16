import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  return (
    <div>
      <input

        className="w-full h-9 rounded-md pl-4"
        placeholder="Add Task..."
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button

        className="bg-[#FC8071] text-white px-5 py-2 rounded-lg mt-3 mb-5"
        onClick={() => {
          onAddTask(task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
