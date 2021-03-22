import React from 'react';

function Board (props) {
    const {data} = props;

    const divStyle = {
        borderLeft: "5px solid #1a1aff",
        backgroundColor: "#e6ffff",
        display: "grid",
        alignContent: "center"
    }
    return <div style={{textAlign: "center", margin: "0% 0% 1.5% 0%", alignItems: "center"}}>
        <div style={divStyle}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
                <div style={{display: "grid", gridTemplateColumns: "0.1fr 0.9fr"}}>
                    <img style={{width: "32px"}} src={data.icon.value} />
                    <div style={{textAlign: "left"}}>{data.title}</div>
                </div>
                <div>
                    <div>{data.key}</div>
                </div>
                <div>
                    <div>{data.owner.name}</div>
                </div>
                <div>
                    <div>{data.category.value}</div>
                </div>
            </div>
        </div>
    </div>
}

export default Board;
