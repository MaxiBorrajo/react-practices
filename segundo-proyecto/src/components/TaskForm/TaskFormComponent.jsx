import { useState, useContext } from "react";
import { TaskContext } from "../../context/Task.context";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

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
    <form onSubmit={handleSubmit} className=" bg-slate-700 px-6 py-5 rounded-md flex flex-col gap-3 self-center">
      <h1 className="text-white text-2xl font-bold">Create new task</h1>
      <div className="flex  gap-3">
      <input
      className="rounded-md px-3 py-1"
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
      className="rounded-md px-1"
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
      <button type="submit" className="bg-sky-500 px-2 rounded-md text-sm text-white">Guardar</button>
      </div>
    </form>
  );
}

export default TaskForm;
