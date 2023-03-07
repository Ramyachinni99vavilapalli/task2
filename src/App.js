import React from 'react'
import Board from './Board'
import Chord from './Chord'
import Dropdown from './Dropdown'
import Nav from './Nav'
import Select from './Select'
import Tarea from './Tarea'
import Tlabel from './Tlabel'
const App = () => {
  return (
    <div>
     <Nav/>
    <Board/>
    <Select/>
    <Dropdown/>
    <Tlabel/>
    <Tarea/>
    </div>
  )
}

export default App
