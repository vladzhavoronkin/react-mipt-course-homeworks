import React from "react";
import boardListItem from "../data/boardListItem";

const BoardListItem = () => {
  return (
    <div>
      <div className="ui celled ordered list">
        <div className="item">
          {boardListItem.tasks[0].title}
          <div className="list">
            <div className="item">{boardListItem.tasks[3].title} </div>
            <div className="list">
              <div className="item">{boardListItem.tasks[6].title} </div>
              <div className="item">{boardListItem.tasks[7].title} </div>
              <div className="item">{boardListItem.tasks[4].title} </div>
              <div className="list">
                <div className="item">{boardListItem.tasks[5].title} </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">{boardListItem.tasks[1].title}</div>
        <div className="item">{boardListItem.tasks[2].title}</div>
      </div>
    </div>
  );
};

export default BoardListItem;
