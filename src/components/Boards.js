import React, {useState} from 'react';
import Board from "./Board";

const getBoards = fetch("api/board")
    .then(response => {return response.json()});

function Boards () {

    const [boardsData, setBoardsData] = useState([]);
    getBoards.then(data => setBoardsData(data));


    console.log(boardsData);
    return <div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
            <div style={{fontWeight: "bold", fontSize: "20px"}}>Name</div>
            <div style={{fontWeight: "bold", fontSize: "20px"}}>Key</div>
            <div style={{fontWeight: "bold", fontSize: "20px"}}>Owner</div>
            <div style={{fontWeight: "bold", fontSize: "20px"}}>Category</div>
        </div>
        {boardsData.map((data, index) => <Board key={index} data={data}/>)}
    </div>
}

export default Boards;
