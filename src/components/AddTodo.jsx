/* eslint-disable react/prop-types */
import React from "react";

const AddTodo = ({ todo, setTodo, createTodo }) => {
  return (
    <form
      onSubmit={createTodo}
      className="flex justify-between items-center my-4"
    >
      <input
        type="text"
        placeholder="Create a new task..."
        className="flex-[75%] p-2.5 outline-none rounded-s-md shadow-inner bg-VeryLightGray text-VeryDarkGrayishBlue dark:bg-VeryDarkBlue dark:text-VeryDarkGrayishBlueDark transition-all"
        value={todo}
        autoFocus
        required
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="submit"
        value="Add Todo"
        className="flex-[25%] bg-BrightBlue text-white font-bold text-lg p-2 rounded-e-md cursor-pointer hover:shadow-sm hover:shadow-BrightBlue hover:transition-all"
      />
    </form>
  );
};

export default AddTodo;
