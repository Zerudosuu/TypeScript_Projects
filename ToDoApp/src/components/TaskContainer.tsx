import DisplayTask from "./DisplayTask";
import TaskList from "./TaskList";

const TaskContainer = () => {
  return (
    <section className="flex flex-1">
      <TaskList />
      <DisplayTask />
    </section>
  );
};

export default TaskContainer;
