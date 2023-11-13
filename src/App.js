import './App.css';
import { useRef, useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const addTask = (e) => {
    if (e === '') {
      alert("You cannot have an empty task!");
    } else {
      const newItem = inputRef.current.value;
      if (newItem !== "") {
        setTask([...task, newItem]);
      }
      inputRef.current.value = "";
    }
  };

  const removeTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };
  
  return (
    <div className="App">
      <div id="Header" className='header'>
        <h1 id="Title">ToDo List</h1>
        <input type="text" id="todoInput" placeholder="Enter Task" ref={inputRef} />
        <span onClick={addTask} class="addBtn"> Add Task</span>
      </div>

      <ul id="todoTasks">
        {task.map((task, index) => (
          <li className="li-item" key={index}>
            {task}
            <span className="text-dark" onClick={() => removeTask(index)}>X</span>
          </li>))}
      </ul>
    </div>
  );
}

export default App;


