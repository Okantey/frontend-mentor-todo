/* eslint-disable react/prop-types */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AllTodos = ({ todos }) => {
  return (
    <React.Fragment>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex items-center justify-between px-4 py-4 border-y border-DarkGrayishBlueDark">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border cursor-pointer"></div>
                <p>{item.name}</p>
              </div>
              <div className="flex items-center gap-2">
                <DeleteIcon
                  className="text-red-600  cursor-pointer p-1 border border-DarkGrayishBlueDark"
                  fontSize="large"
                />
                <EditIcon
                  className="text-green-600  cursor-pointer p-1 border border-DarkGrayishBlueDark"
                  fontSize="large"
                />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default AllTodos;
