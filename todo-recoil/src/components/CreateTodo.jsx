import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { todoAtom } from "../store/atoms/todoAtom"

export function CreateTodo(){
    const [todos, setTodos] = useRecoilState(todoAtom)
    
    const [title, setTtile] = useState("")
    const [description, setDescription] = useState("")

    function onClickHandler(){
    setTodos([...todos,{title, description}])
    }
    return <div>
       <input type="text" value={title} onChange={(e)=>{
          setTtile(e.target.value)
       }}/>
       <input type="text" value={description} onChange={(e)=>{
          setDescription(e.target.value)
       }}/>
       <button onClick={onClickHandler}>addTodo</button>
    </div>
}