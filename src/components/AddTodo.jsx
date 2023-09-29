import React from "react";

const AddTodo = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <input
        type="text"
        placeholder="Create a new task..."
        className="flex-[75%] p-2.5 outline-none rounded-s-md shadow-inner"
      />
      <button className="flex-[25%] bg-BrightBlue text-white font-bold text-lg p-2 rounded-e-md hover:shadow-sm hover:shadow-BrightBlue hover:transition-all">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
