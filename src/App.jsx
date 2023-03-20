import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 5},
        {name: "Sum"},
    ]
  return (
      <div>
          {
              profiles.map((profile, index) => {
                  return <User name={profile.name} age={profile.age} key={index} />
              })
          }
      </div>
  )
}

const User = (props) => {
    return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}
User.defaultProps = {
    age: 1
}
export default App
