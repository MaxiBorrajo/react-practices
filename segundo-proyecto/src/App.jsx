import TaskList from "./views/TaskList/TaskListView";
import TaskForm from "./components/TaskForm/TaskFormComponent";
import { tasks as dbTasks } from "./data/TaskList";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(dbTasks);
  }, []);

  const createTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const updateTask = (task) => {
    tasks[task.id - 1] = task;
    setTasks([...tasks]);
  };

  const updateIds = () => {
    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    setTasks([...tasks]);
  };

  const deleteTask = (task) => {
    setTasks([...tasks.splice(task.id - 1, 1)]);
    updateIds();
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
