import { useState } from "react"
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { todoAtom, filterAtom, filteredTodos } from "../store/atoms/todoAtom"


export function Filter(){
    const todos = useRecoilValue(todoAtom)
    const [filter, setFilter] = useRecoilState(filterAtom);
   const filterTodos = useRecoilValue(filteredTodos)

    return <div>
       <input type="text" onChange={(e)=>{
         setFilter(e.target.value)
       }} value={filter} />
       {
        filterTodos.map((todo)=>{
            return<div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            </div>
        })
       }
    </div>


}