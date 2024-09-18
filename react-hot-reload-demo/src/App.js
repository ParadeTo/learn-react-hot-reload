import React from 'react'
import {Cpn1} from './Cpn1'
import {Cpn2} from './Cpn2'
import {hot} from 'react-hot-loader/root'

function App() {
  return (
    <div>
      <h1>React App</h1>
      <div>
        <Cpn1 />
      </div>
      <div>
        <Cpn2 />
      </div>
    </div>
  )
}

export default hot(App)
