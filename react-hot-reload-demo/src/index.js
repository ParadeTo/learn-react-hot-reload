import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)

if (module.hot) {
  module.hot.accept('./App.js', function () {
    console.log('Accepting the updated printMe module!')
    root.render(<App />)
  })
}
