import { useState } from "react"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

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

  return (
    <div className="container">
      <Header 
        title = "React Refresher"
        />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
