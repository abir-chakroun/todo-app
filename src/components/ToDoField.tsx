import React, { useState } from "react";
import { toDo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
interface Props {
  toDo: toDo;
  toDos: toDo[];
  setToDos: React.Dispatch<React.SetStateAction<toDo[]>>;
}

function ToDoField({ toDo, toDos, setToDos }: Props) {
  const [editedToDo, setEditedToDo] = useState<string>(toDo.name);
  const [editMode, setEditMode] = useState<boolean>(false);
  const completeToDo = () => {
    const updatedToDos: toDo[] = toDos.map((item) => {
      if (item.id === toDo.id) return { ...toDo, isDone: !toDo.isDone };
      return toDo;
    });
    setToDos(updatedToDos);
  };

  const editToDo = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedToDos: toDo[] = toDos.map((item) => {
      if (item.id === toDo.id) return { ...toDo, name: editedToDo };
      return toDo;
    });
    setToDos(updatedToDos);
    setEditMode(false);
  };

  const deleteToDo = () => {
    const filteredToDos: toDo[] = toDos.filter((item) => item.id !== toDo.id);
    setToDos(filteredToDos);
  };

  return (
    <div className="todos__single">
      {editMode ? (
        <form onSubmit={editToDo}>
          <input
            onChange={(e) => setEditedToDo(e.target.value)}
            value={editedToDo}
            className="todos__single--text"
            autoFocus
          />
        </form>
      ) : (
        <span className={`todos__single--text ${toDo.isDone && "completed"}`}>
          {toDo.name}
        </span>
      )}

      <AiFillEdit className="icon" onClick={(e) => setEditMode(!editMode)} />
      <AiFillDelete className="icon" onClick={deleteToDo} />
      <AiOutlineCheck className="icon" onClick={completeToDo} />
    </div>
  );
}

export default ToDoField;
