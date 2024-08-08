import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Filter } from './components/Filter'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
    <div>
      <RecoilRoot>
      <CreateTodo />
      <Filter/>
      </RecoilRoot>
    </div>
  )
}

export default App
