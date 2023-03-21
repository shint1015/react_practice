import { useState } from 'react'
import PropTypes from "prop-types";
import './App.css'


const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 5},
        {name: "Noname", age:3},
        // {name: 1},//errorが起こる
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
//propの定義
User.propTypes = {
    name: PropTypes.string,
    //数字で必須である場合
    age: PropTypes.number.isRequired
}
export default App
