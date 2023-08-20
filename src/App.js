import './App.css';
import store from './configStore';
import { addTask, removeTask, completeTask } from './store/task';

store.subscribe( ()=> {
  console.log("Updated", store.getState())
})

const addTask3 = () => async function(dispatch, getState) {
  setTimeout(() => {
    // You can invoke sync or async actions with `dispatch`
    dispatch(addTask({task: "Task 3"}));
  }, 1000);
}

store.dispatch(addTask({task: "Task 1"}))
store.dispatch(addTask({task: "Task 2"}))
console.log(store.getState())

store.dispatch(completeTask({id: 2}))
console.log(store.getState())

store.dispatch(removeTask({id: 1}))
store.dispatch(addTask3())

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
