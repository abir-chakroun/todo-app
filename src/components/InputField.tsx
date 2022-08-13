import React from "react";
import "./styles.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ toDo, setToDo }: Props) => {
  return (
    <div>
      <form className="search__field">
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button className="search__button">Go</button>
      </form>
    </div>
  );
};

export default InputField;
