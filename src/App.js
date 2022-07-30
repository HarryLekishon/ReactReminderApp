import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import About from './Components/About'


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((tasks) => {
        setTasks(tasks)
      })
  }, []);
const addTask = (task) => {
  fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })

  .then((r) => r.json())
  .then((newTask) => setTasks([...tasks, newTask]))

}
//Delete Task

const deleteTask = (id) => {
  fetch(`http://localhost:5000/tasks/${id}`, {
    method: "Delete",
  })
 
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, 
    reminder: !task.reminder}: task))
}
  return (
    <>
    
    <Router>
      <div className='container1'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
        <Footer />
      </div>
    </Router>

    </>
  );
}


export default App;
