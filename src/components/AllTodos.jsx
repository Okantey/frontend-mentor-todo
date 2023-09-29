/* eslint-disable react/prop-types */
import React from "react";

const AllTodos = ({ todos }) => {
  return (
    <React.Fragment>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <input type="checkbox" checked={item.isCompleted} />
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default AllTodos;
