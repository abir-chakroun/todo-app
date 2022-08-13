import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  return (
    <div className="App">
      <div className="heading">
        <h1> TASKIFY</h1>
      </div>
      <InputField toDo={toDo} setToDo={setToDo} />
    </div>
  );
};

export default App;
