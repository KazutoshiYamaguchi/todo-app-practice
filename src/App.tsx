import React, { useState } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Header } from "./components/Header";
import { TaskCards } from "./components/task/TaskCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
