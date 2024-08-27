import { useEffect, useState } from 'react';
import { Header } from './componets/Header';
import { AddTask } from './componets/AddTask';
import { ShowTask } from './componets/ShowTask';
import './App.css';

function App() {
  const[tasklist,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))|| []);
  const [task,setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist]);
  return (
    <div className="App">
      <Header/>
      <AddTask 
      taskList={tasklist} 
      setTaskList ={setTasklist}
      task={task}
      setTask= {setTask}
      
      />
      <ShowTask taskList={tasklist}
       setTaskList ={setTasklist}
       task={task}
      setTask= {setTask}
      />
      
    </div>
  );
}

export default App;
