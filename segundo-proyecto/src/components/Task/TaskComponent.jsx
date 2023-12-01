import { useState } from "react";

function Task({ task, deleteTask, updateTask }) {
  const [checked, setChecked] = useState(task.completed);

  return (
    <div>
      <h2>{task.task}</h2><button type="button" onClick={()=>deleteTask(task)}>Eliminar</button>
      <p>Prioridad: {task.priority}</p>
      <p>{task.completed ? "Completed" : "Uncompleted"}</p>
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
    </div>
  );
}

export default Task;
