import {atom, selector} from 'recoil'

export const todoAtom = atom({
    key:"todoAtom",
    default : []
})
export const  filterAtom = atom({
    key:"filteredAtom",
    default : ""
})
export const filteredTodos = selector({
    key:"filtertedTodos",
    get : ({get})=>{
        const todos = get(todoAtom);
        const filter = get(filterAtom)

        return todos.filter(todo => todo.title.includes(filter) || todo.description.includes(filter))
    }
})