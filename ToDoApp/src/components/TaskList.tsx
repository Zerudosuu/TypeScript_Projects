import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskList = () => {
  const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleToggleModal = () => {
    setAddTaskModalVisible(!addTaskModalVisible);
    console.log(addTaskModalVisible);
  };

  const handleSubmit = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);

    setAddTaskModalVisible(false);
  };

  const handleToggleComplete = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );

    console.log(tasks);
  };

  //   const handleDelete= () = {

  //   }

  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);

  return (
    <div className=" flex flex-col w-5/12  border-4 border-black-500">
      <button
        onClick={handleToggleModal}
        className="border-2 border-black rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Add
      </button>

      {addTaskModalVisible && (
        <AddTask onSubmit={handleSubmit} onToggleModal={handleToggleModal} />
      )}

      <div className="h-full border-4 border-black">
        <h2>Tasks</h2>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onToggleComplete={() => handleToggleComplete(index)}
          />
        ))}
      </div>

      <div className="h-full border-4 border-black">
        <h2>Completed Tasks</h2>
      </div>
    </div>
  );
};

export default TaskList;
