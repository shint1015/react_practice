import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
      <div>
          <Cat/>
          <Cat/><Cat/><Cat/>
      </div>
  )
}

const Cat = () => {
    return <div>Meow!</div>
}
export default App
