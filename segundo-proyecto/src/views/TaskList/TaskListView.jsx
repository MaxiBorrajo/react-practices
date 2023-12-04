import Task from "../../components/Task/TaskComponent";
import { useContext } from "react";
import { TaskContext } from "../../context/Task.context";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-center text-3xl text-white text-bold">No hay tareas disponibles</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <Task task={task} />
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
