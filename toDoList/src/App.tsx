import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'


function App() {
 const [list, setList] = useState([]);
 const [input, setInput] = useState("");

 const [status, setUnderline] = useState(false);


 // helper functions
 const addtodo = (todo: string) => {
   if (!todo) {
     alert("Enter an item ! ");
     return
   }
   const newtodo = {
     id: Math.random(),
     todo: todo,
     status: Math.random(),
   }
   // add todo to the list
   setList([...list, newtodo]);
   // clear input box
   setInput("");
 }
 const deleteTodo = (id) => {
   const newList = list.filter((todo) => todo.id !== id)
   setList(newList);
 }
 const handleUnderlineChange = (e) => {

    setUnderline(e.target.checked);
 };


 return (
   <div>
     <h1>My to do list: </h1>
     <input type="text"
       placeholder='add new to do item'
       value={input}
       onChange={(e) => setInput(e.target.value)}
     />
     <button onClick={() => addtodo(input)}>Add</button>
     <ul>
       {list.map((todo) => (
         <li key={todo.id} style={{ textDecorationLine:  status ? 'underline' : 'normal' }}>
           {todo.todo}
           <input 
           name="underline" 
           type="checkbox" 
           value={status} 
           onChange={()=>{handleUnderlineChange}}
           ></input>
           <button className='deleteButton' key={todo.id} onClick={() => deleteTodo(todo.id)}> x </button>
         </li>
       ))}
     </ul>
   </div>


 )
}


export default App
