import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoLists from "./components/ToDosList";
import { toDo } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<toDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newToDo: toDo = {
      name: toDo,
      id: Date.now() + "",
    };
    setToDos([newToDo, ...toDos]);
    setToDo("");
  };
  return (
    <div className="App">
      <div className="heading">
        <h1> TASKIFY</h1>
      </div>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoLists toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
