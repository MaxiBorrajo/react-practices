import { useState } from "react";

function TaskForm({ createTask }) {
  const [task, setTask] = useState({
    id: 0,
    task: "",
    priority: "Baja",
    completed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    resetTask();
  };

  const resetTask = () => {
    setTask({
      id: 0,
      task: "",
      priority: "Baja",
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={task.task}
        onChange={(e) => {
          setTask((prevTask) => ({
            ...prevTask,
            task: e.target.value,
          }));
        }}
      />
      <select
        name="priority"
        id="priority"
        value={task.priority}
        onChange={(e) => {
          setTask((prevTask) => ({
            ...prevTask,
            priority: e.target.value,
          }));
        }}
      >
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
