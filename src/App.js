import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="Header" class='header'>
        <h1>To Do List</h1>
        <input type="text" id="todoInput" placeholder="Enter Task" />
        <span onclick="newTask()" class="addBtn"> Add Task</span>
      </div>

      <ul id="todoTasks">
        <li>test item #1</li>
        <li>text item #2</li>
      </ul>
    </div>
  );
}

export default App;
