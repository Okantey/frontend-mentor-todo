/* eslint-disable react/prop-types */
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { CircularProgress } from "@mui/material";

const AllTodos = ({ todos, isLoading, handleCompletedTodos }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <div className="w-full text-center flex flex-col items-center justify-center gap-2">
          <span className="text-xl text-BrightBlue">Fetching Todos</span>
          <CircularProgress className="text-BrightBlue" />
        </div>
      ) : (
        todos.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex items-center justify-between px-4 py-4 border-y border-DarkGrayishBlueDark">
                <div className="flex items-center gap-2">
                  <input
                    title="Mark as Completed"
                    type="checkbox"
                    className="w-8 h-8 rounded-full border border-DarkGrayishBlueDark cursor-pointer"
                    onChange={() => handleCompletedTodos(item.id)}
                    checked={item.isCompleted}
                  />
                  <p
                    className={`text-VeryDarkGrayishBlue dark:text-VeryDarkGrayishBlueDark`}
                    style={
                      item.isCompleted
                        ? {
                            textDecoration: "line-through",
                          }
                        : null
                    }
                  >
                    {item.name}
                  </p>
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
        })
      )}
    </React.Fragment>
  );
};

export default AllTodos;
