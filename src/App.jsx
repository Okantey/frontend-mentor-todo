import React, { useEffect, useState } from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { AddTodo, AllTodos } from "./components";
import { v4 as uuidv4 } from "uuid";
import axios from "./api/axios";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const endPoint = "/todos";

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    fetchTodos();
  }, [todo]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(endPoint);
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const newTodo = {
        id: uuidv4(),
        name: todo,
        isCompleted: false,
      };

      const response = await axios.post(endPoint, JSON.stringify(newTodo), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setTodos([...todos, newTodo]);
      setTodo("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="w-screen h-screen flex flex-col overflow-x-hidden">
        <section className="bg-desktop-header-light dark:bg-desktop-header-dark transition-all w-full py-16 object-cover  grid place-items-center sticky top-0 left-0 right-0">
          <div className="w-[90%] md:w-[30%] m-auto">
            <div className=" w-full flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">TODO</h1>
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
        <section className="bg-VeryLightGray h-screen transition-colors dark:bg-VeryDarkBlue dark:transition-colors w-full">
          <section className="bg-VeryLightGray transition-colors dark:bg-VeryDarkBlue dark:transition-colors w-full">
            <div className="w-[90%] md:w-[30%] m-auto shadow-lg bg-VeryLightGray dark:bg-VeryDarkBlue rounded-md ">
              <h1 className="text-center py-3 text-VeryDarkGrayishBlue dark:text-VeryDarkGrayishBlueDark">
                All Tasks
              </h1>
              <AllTodos todos={todos} isLoading={isLoading} />
            </div>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
