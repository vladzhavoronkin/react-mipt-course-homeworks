import React from "react";

function Task({taskId, tasks}) {
    const task = tasks.find(task => task._id === taskId);

    return <div>
        <div style={{display: "grid", textAlign: "left"}}>
            <div>{task.title}</div>
            <div style={{marginLeft: "20%"}}>
                {task.subtasks.map(subtaskId => (
                    <Task key={subtaskId} taskId={subtaskId} tasks={tasks}/>
                ))}
            </div>
        </div>
    </div>
}

export default Task;