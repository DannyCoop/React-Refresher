import { useState } from "react"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "some",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "some1",
        day: "Feb 7th at 2:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "some2",
        day: "Feb 8th at 2:30pm",
        reminder: true,
    },
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(tasks)
    setTasks(tasks.map((task) => 
      task.id == id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
      ) : ("No Task To Show")}
    </div>
  );
}

export default App;
