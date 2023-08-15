import logo from './logo.svg';
import './App.css';
import store from './configStore';
import { addTask, removeTask, completeTask, fetchTodo } from './store/task';

store.subscribe( ()=> {
  console.log("Updated", store.getState())
})

store.dispatch(addTask({task: "Task 1"}))
store.dispatch(addTask({task: "Task 2"}))
console.log(store.getState())

store.dispatch(completeTask({id: 2}))
console.log(store.getState())

store.dispatch(removeTask({id: 1}))
store.dispatch(fetchTodo())
console.log(store.getState())


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
