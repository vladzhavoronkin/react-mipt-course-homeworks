import React from 'react';
import './App.css';
import data from './board.json'
import tb1 from './TB1.json'
import {BrowserRouter, Route} from 'react-router-dom'

const getHeaders = () => {
    return (
        <table border={1}>
            <tr>
                <th width={120}>Title</th>
                <th width={120}>Key</th>
                <th width={120}>Owner</th>
                <th width={120}>Category</th>
            </tr>
        </table>
    );
}

const Boards = () => {
    return <div>
        {getHeaders()}
        {data.map(o => {
                const {_id, key, title, owner, category} = o;
                return (
                    <table border={1}>
                        <tr id={_id}>
                            <td width={120}>
                                <a href={key}>
                                    {title}
                                </a>
                            </td>
                            <td width={120}>{key}</td>
                            <td width={120}>{owner.name}</td>
                            <td width={120}>{category.value}</td>
                        </tr>
                    </table>
                )
            }
        )}
    </div>
}

const getBoardHeaders = () => {
    return (<div>
        <table border={1}>
            <tr>
                <th width={150}>Title</th>
                <th width={120}>Key</th>
                <th width={250}>Id</th>
                <th width={120}>Status</th>
                <th width={250}>Parent</th>
            </tr>
        </table>
    </div>)
}

const getTasks = (props) => {
    const {subtasks} = tb1.tasks.filter(o => o._id === props)[0];
    const task = tb1.tasks.filter(o => o._id === props)[0];
    return (<div>
        <table border={1}>
            <tr>
                <td width={150}>{task.title}</td>
                <td width={120}>{task.key}</td>
                <td width={250}>{task._id}</td>
                <td width={120}>{task.status}</td>
                <td width={250}>{task.parent}</td>
            </tr>
        </table>
        {subtasks.map(o => {
            return getTasks(o);
        })}
    </div>)
}

const Board = (tb) => {
    const mainTasks = tb.tasks.filter(o => !o.hasOwnProperty('parent'));
    return <div>
        {getBoardHeaders()}
        {mainTasks.map(o => {
            return getTasks(o._id);
            }
        )}
    </div>
}

function App () {
    return <div>
        <BrowserRouter>
            <Route path="/boards" component={Boards}/>
            <Route path="/TB1" component={() => Board(tb1)}/>
        </BrowserRouter>
    </div>
}

export default App;
