import React, { useState } from "react";

// interface AddTaskProps {
//   onSubmit: (task: { name: string; detail: string; completed: boolean }) => void;
//   onToggleModal: () => void;
// }

type AddTaskProps = {
  onSubmit: (task: {
    name: string;
    detail: string;
    completed: boolean;
  }) => void;
  onToggleModal: () => void;
};

const AddTask = ({ onSubmit, onToggleModal }: AddTaskProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = {
      name: taskName,
      detail: taskDetail,
      completed: false,
    };

    onSubmit(task);
    setTaskName("");
    setTaskDetail(""); // Clear input after submission
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTaskName("");
    setTaskDetail("");
    onToggleModal(); // Clear input after cancellation
  };
  return (
    <div
      className="absolute left-1/2 top-1/3 border-4 border-black w-80 h-auto
    "
    >
      <form onSubmit={handleSubmit}>
        <h1>Create a task</h1>
        <div className=" flex gap-2 w-full border-4 border-black">
          <label htmlFor="taskName">Task Name:</label>
          <input
            className="flex flex-1"
            type="text"
            id="taskName"
            value={taskName}
            placeholder="Task name"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className=" flex gap-2 w-full border-4 border-black">
          <label htmlFor="taskName">Task Detail:</label>
          <input
            className="flex flex-1"
            type="text"
            id="taskName"
            value={taskDetail}
            placeholder="Task name"
            onChange={(e) => setTaskDetail(e.target.value)}
          />
        </div>

        <div
          className="flex gap-2 justify-end
        "
        >
          <button onClick={handleCancel}>cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
