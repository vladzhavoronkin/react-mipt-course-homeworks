import React, {useState} from "react";
function Task (props) {
    const tasks = props.data;
    console.log(tasks);
    return <div>
        {tasks.map((value, index) => {
            return <div style={{display: "grid", textAlign: "left"}} key={index}>
                    <div>{value.title ? value.title: value}</div>
                <div style={{marginLeft: "20%"}}>
                    {!!value.subtasks ?
                        <Task key={index} data={value.subtasks}/> : null}
                </div>
                </div>
        })}
    </div>
}
export default Task;