import React, { useRef } from "react";
import "./styles.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }: Props) => {
  //remove blur after creating elem
  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    inputRef.current?.blur();
    handleAdd(e);
  };

  return (
    <div>
      <form className="search__field" onSubmit={submitForm}>
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          ref={inputRef}
        />
        <button className="search__button">Go</button>
      </form>
    </div>
  );
};

export default InputField;
