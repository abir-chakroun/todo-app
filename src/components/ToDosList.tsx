import React, { useState } from "react";
import { toDo } from "../model";
import ToDoField from "./ToDoField";

interface Props {
  toDos: toDo[];
  setToDos: React.Dispatch<React.SetStateAction<toDo[]>>;
}

function ToDoLists({ toDos, setToDos }: Props) {
  const [toDo, setToDo] = useState<toDo>();

  return (
    <div className="todos">
      {toDos.map((toDo: toDo, idx: number) => (
        <ToDoField toDo={toDo} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
}

export default ToDoLists;
