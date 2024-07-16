import React, { useState } from "react";

const EditTask = ({ task, onUpdateTask, onDeleteTask }) => {
  const[isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <label className="flex  justify-between items-center ">
          <input

            className="h-8 w-[300px]  pl-3 text-xl"
            type="text"
            value={task.text}
            onChange={(e) => {
              onUpdateTask({
                ...task,
                text: e.target.value,
              });
            }}
          />
 
          <button

            className="bg-[#647281] text-white px-4 py-2 my-3 rounded-lg ml-14 mr-4 "
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Update
          </button>

          <button

          className="bg-[#f45052] text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </label>
      </>
    );
  } else {
    taskContent = (
      <>
      <div className="text-xl w-full"> {task.text}</div>
        <button

        className="bg-[#0bd4a2] text-white px-5 py-2 rounded-lg my-2"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>

        <button

        className="bg-[#ff6f47] text-white px-4 py-2 rounded-lg ml-4"
          onClick={() => {
            onDeleteTask(task.id);
          }}
        >
          Delete
        </button>
      </>
    );
  }
  return (
    <div>
      <label className="flex justify-between items-center w-full">
        <input

            className="h-7 w-5 rounded-sm mr-3"
          type="checkBox"
          checked={task.done}
          onChange={(e) => {
            onUpdateTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
      </label>
    </div>
  );
};

export default EditTask;
