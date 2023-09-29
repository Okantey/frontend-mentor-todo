import React, { useState } from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { AddTodo, AllTodos } from "./components";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      name: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  return (
    <React.Fragment>
      <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center justify-center">
        <section className="bg-desktop-header-light w-full flex-[35%] object-cover grid place-items-center">
          <div className="w-[30%] m-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white tracking-widest">
                TODO
              </h1>
              <img src={moonIcon} alt="theme-icon" className="w-8" />
            </div>
            <AddTodo todo={todo} setTodo={setTodo} createTodo={createTodo} />
          </div>
        </section>
        <section className="bg-white w-full flex-[65%]">
          <div className="w-[30%] m-auto border bg-white rounded-md mt-[-3%]">
            <h1 className="text-center">All Tasks</h1>
            <AllTodos todos={todos} />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
