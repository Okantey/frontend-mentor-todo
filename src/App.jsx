import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import { AddTodo } from "./components";

const App = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center justify-center">
        <section className="bg-desktop-header-light w-full flex-[40%] object-cover grid place-items-center">
          <div className="w-[30%] m-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-white tracking-widest">
                TODO
              </h1>
              <img src={moonIcon} alt="theme-icon" className="w-8" />
            </div>
            <AddTodo />
          </div>
        </section>
        <section className="bg-white flex-[60%]"></section>
      </div>
    </React.Fragment>
  );
};

export default App;
