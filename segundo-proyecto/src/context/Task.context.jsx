import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as dbTasks } from "../data/TaskList";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
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
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        updateTask,
        createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
