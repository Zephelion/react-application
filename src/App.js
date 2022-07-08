import React from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
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


  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 100) + 1;

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  const toggleForm = () => {
    setShowAddTask(!showAddTask)
  }


  return (
    <div className="container">
      <Header onToggleAdd={toggleForm} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'Geen taken voor vandaag'}

    </div>
  );
}

export default App;
