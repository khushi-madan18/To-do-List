import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [task, setTask] = useState("")
 const [arr, setArr] = useState([])


 const handleChange = (event) => {
   setTask(event.target.value)


 }


 const handleClick = () => {
   if (task) {
     setArr([...arr, task]);
     setTask("")
   }


 }


 const handleRemove = (index) => {
   let temp = [...arr]
   temp.splice(index, 1)
   setArr(temp)


 }


 const handleEdit = () => {


 }


 return (
   <>
     <h1>To-do List</h1>
     <input placeholder="Write your task" onChange={handleChange} value={task} className='inputTask' />
     <button onClick={handleClick} className='taskBtn'>Add Task</button>
     <ul>
       {arr.map((item, index) => (
         <li key={index} className='list'><input value={item} className='listItems' /><button className='deleteBtn' onClick={() => handleRemove(index)}>Delete</button> </li>
       ))}
     </ul>
   </>
 )
}


export default App
