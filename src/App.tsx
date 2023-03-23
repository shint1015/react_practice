import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from "./components/Sample";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>App</h1>
        <Sample samplePropData="Data passed from parents." />
    </div>
  )
}

export default App
