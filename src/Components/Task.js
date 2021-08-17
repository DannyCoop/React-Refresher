import { useState } from "react"

const Tasks = () => {
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
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks