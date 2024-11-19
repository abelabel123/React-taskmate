// import { Header } from "./components/Header"
// import { Footer } from "./components/Footer"
// import React from 'react';
// import './App.css';

// export default function App() {
//   return (
//     <>
//       <Header />
//       <div>
//         <h1> CLSS LABS </h1>
//       </div>
//       <Footer />
//     </>
//   )
// }

// import React from 'react';
// import { useState } from 'react'
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(useState(0));

//   function handleAdd(){
  
//     setCount(count + 1);
//   }

//   function handleSub(){
//     setCount(count - 1);
//   }

//   function handleReset(){
//     setCount(0);
//   }

//   return (
//     <div className="App">
//       <div className="box">
//        <p>{count}</p>
//        <button onClick={handleAdd} className='add'>ADD</button>
//        <button onClick={handleSub} className='sub'>SUB</button>
//        <button onClick={handleReset}className='reset'>RESET</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { Header } from './components/Header';
// import { TaskList } from './components/TaskList';

// function App() {

//   return (
//     <div className="App">
//       <Header />
//       <TaskList title="Random" subtitle="Test" />
//     </div>
//   );

// }

// export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import {Footer} from "./components/Footer";
import { AddTask } from "./components/AddTask";

import './App.css';




function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header/>
      <main>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
