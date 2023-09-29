import React, { useEffect, useState } from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { AddTodo, AllTodos } from "./components";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
      <div className="w-screen h-screen flex flex-col">
        <section className="bg-desktop-header-light w-full flex-[35%] object-cover flex justify-center items-center">
          <div className="w-[90%] md:w-[30%] m-auto">
            <div className=" w-full flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white tracking-widest">
                TODO
              </h1>
              <img
                src={theme === "dark" ? sunIcon : moonIcon}
                alt="theme-icon"
                className="w-6 object-cover cursor-pointer transition-all"
                onClick={handleThemeSwitch}
                title="Theme"
              />
            </div>
            <AddTodo todo={todo} setTodo={setTodo} createTodo={createTodo} />
          </div>
        </section>
        <section className="bg-white transition-colors dark:bg-black dark:transition-colors w-full flex-[65%]">
          <div className="w-[90%] md:w-[30%] m-auto border bg-white rounded-md mt-[-3rem]">
            <h1 className="text-center">All Tasks</h1>
            <AllTodos todos={todos} />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
