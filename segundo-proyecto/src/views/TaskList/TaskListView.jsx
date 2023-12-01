import "./TaskList.css";
import Task from "../../components/Task/TaskComponent";

function TaskList({ tasks, updateTask, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas disponibles</h1>;
  }

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <Task task={task} updateTask={updateTask} deleteTask={deleteTask}/>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
