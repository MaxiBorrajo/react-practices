import TaskList from "./views/TaskList/TaskListView";
import TaskForm from "./components/TaskForm/TaskFormComponent";

function App() {
  return (
    <div className="bg-gray-900 p-5 flex flex-col gap-10 h-screen">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
