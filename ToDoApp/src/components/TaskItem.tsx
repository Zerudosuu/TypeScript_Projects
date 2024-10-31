const TaskItem = ({ task, onToggleComplete }) => {
  return (
    <div>
      <button className=" flex justify-between gap-2 border-2 w-full border-black rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition">
        {task.name}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
        />
      </button>
    </div>
  );
};

export default TaskItem;
