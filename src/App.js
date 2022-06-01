import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Tandarts afspraak',
            day: 'Feb 5th at 2:30pm',
            reminder: true, 
        },
        {
            id:2,
            text: 'Vibing somewhere',
            day: 'Feb 6th at 3:30pm',
            reminder: true, 
        },
        {
            id:3,
            text: 'Contemplating some stuff',
            day: 'Feb 5th at 5:00pm',
            reminder: false, 
        }
    ]
  )

  const deleteTask = (id) => {
    console.log("delete", id)
  }


  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
