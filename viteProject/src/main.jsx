import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
directly this will not work as react need specific type of object that is declared by react only
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
*/

const varialble = "this is variable";
const reactElement = React.createElement(
  'a',  // type
  {hrf: 'https://google.com', target: '_blank'}, // props
  'click me to open google', // direct test
  varialble   // any variable of resolved expression
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
)
