import React,{useState} from 'react'

const Todo_list = () => {
  const [input, setInput] = useState("")
  const [todo,setTodo] = useState([])
const Addtn = ()=>{
  
  if (input.trim() === "") return;
  const items = {id:Date.now(),text:input}
  setTodo([...todo,items])
setInput("")
}
const delettodo = (id)=>{
  const D = todo.filter((_,i)=> i!== id)
  setTodo(D)
}

  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value)
  }
  return (
    <div>
      <input type= 'text'  value={input} onChange={handleChange}/>
      <button onClick={()=>Addtn()}>Add</button>
      <ul>
      {todo.map((todo,index)=>(
        <li key={index}>{todo.text} 
        <button onClick={()=>delettodo(index)}>Del</button>
        </li>
      ))}
      </ul>
      </div>
  )
}
export default Todo_list