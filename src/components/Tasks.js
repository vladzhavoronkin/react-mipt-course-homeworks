import React, {useEffect, useState} from "react";
import Task from "./Task";

const getBoard = fetch("api/board/TB1")
    .then(response => {
        return response.json()
    });

function Tasks() {

    const [board, setBoard] = useState(null);
    useEffect(() => {
        getBoard.then(data => setBoard(data));
    }, [])

    if (!board) {
        return null;
    }

    const rootTasks = board.tasks.filter(task => !task.parent);
    return <div>
        <div style={{display: "grid", gridTemplateColumns: "0.1fr 0.9fr"}}>
            <img style={{width: "32px"}} src={board.icon.value}/>
            <div style={{textAlign: "left"}}>{board.title}</div>
        </div>
        <div>
            <div style={{display: "grid", textAlign: "left"}}>{board.category.value}</div>
        </div>
        {rootTasks.map(task => (
            <Task taskId={task._id} tasks={board.tasks}/>
        ))}
    </div>
}

export default Tasks;