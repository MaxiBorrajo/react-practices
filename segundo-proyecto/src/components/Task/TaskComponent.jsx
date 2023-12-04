import { useState, useContext } from "react";
import { TaskContext } from "../../context/Task.context";

function Task({ task }) {
  const [checked, setChecked] = useState(task.completed);

  const { deleteTask, updateTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-700  text-white rounded-md p-3 flex gap-2 flex-col">
      <span className="flex  justify-between items-center gap-3">
        <h2 className="text-xl capitalize font-bold">{task.task}</h2>
        <button
          type="button"
          onClick={() => deleteTask(task)}
          className="bg-red-500 px-2 py-1 rounded-md text-sm
      hover:bg-red-400"
        >
          Eliminar
        </button>
      </span>
      <p className="text-base text-gray-400">Prioridad: {task.priority}</p>
      <span className="flex gap-2 items-center">
        <p className="text-sm">{task.completed ? "Completed" : "Uncompleted"}</p>
        <input
          type="checkbox"
          value={checked}
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
            task.completed = !checked;
            updateTask(task);
          }}
        />
      </span>
    </div>
  );
}

export default Task;
