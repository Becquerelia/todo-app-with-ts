import { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." />
          <input type="number" placeholder="Deadline (in Days)..." />
        </div>

        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
