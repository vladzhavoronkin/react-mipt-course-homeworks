import React from "react";
import Header from "./Header";
import BoardList from "./BoardList";
import BoardListItem from "./BoardListItem";

const App = () => {
  return (
    <div>
      <Header />
      <button>Create Board</button>
      <br />
      <br />
      <BoardList />
      <br />
      <button>Create Task</button>
      <br />
      <br />
      <BoardListItem />
    </div>
  );
};

export default App;
