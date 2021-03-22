import React from "react";
import boardList from "../data/boardList";

const BoardList = () => {
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Key</th>
            <th>Category</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Title">{boardList[0].title}</td>
            <td data-label="Key">{boardList[0].key}</td>
            <td data-label="Categoty">{boardList[0].category.value}</td>
            <td data-label="Owner">{boardList[0].owner.name}</td>
          </tr>
          <tr>
            <td data-label="Title">{boardList[1].title}</td>
            <td data-label="Key">{boardList[1].key}</td>
            <td data-label="Categoty">{boardList[1].category.value}</td>
            <td data-label="Owner">{boardList[1].owner.name}</td>
          </tr>
          <tr>
            <td data-label="Title">{boardList[2].title}</td>
            <td data-label="Key">{boardList[2].key}</td>
            <td data-label="Categoty">{boardList[2].category.value}</td>
            <td data-label="Owner">{boardList[2].owner.name}</td>
          </tr>
          <tr>
            <td data-label="Title">{boardList[3].title}</td>
            <td data-label="Key">{boardList[3].key}</td>
            <td data-label="Categoty">{boardList[3].category.value}</td>
            <td data-label="Owner">{boardList[3].owner.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
