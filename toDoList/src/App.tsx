import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'


function App() {
 const [list, setList] = useState([

 ]);
 const [input, setInput] = useState("");

 const [status, setUnderline] = useState([false, '']);


 // helper functions
 const addtodo = (todo: string) => {
   if (!todo) {
     alert("Enter an item ! ");
     return
   }
   const newtodo = {
     id: Math.random(),
     todo: todo,
     done:false
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
  const newListToDo = list.map(todo => {
    if(todo.id === e )
      return {...todo, done:!todo.done}
    return todo; 
  })
  console.log(newListToDo)
  setList(newListToDo)
    // setUnderline(e.target.checked);
 };

 const handlecheckboxchange = ()=>{
  if(todo.done)
  return null;
  handleUnderlineChange(todo.id);
 }
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
         <li key={todo.id} style={todo.done ? {textDecoration:"line-through"} : null} >
           {todo.todo}
           <input 
           name="underline" 
           type="checkbox" 
         //  value={status} 
           key={todo.id}
        // checked={todo.done}
            onChange={()=>{ handleUnderlineChange(todo.id)}}
           ></input>
           <button className='deleteButton' key={todo.id} onClick={() => deleteTodo(todo.id)}> x </button>
         </li>
       ))}
     </ul>
   </div>


 )
}

 // textDecorationLine:  status ? 'underline' : 'normal' 

export default App
